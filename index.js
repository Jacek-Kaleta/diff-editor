require.config({ paths: { vs: './vs' } });

require(['./vs/editor/editor.main'], function () 
{
	var diffEditor = monaco.editor.createDiffEditor(document.getElementById('container'),
	{originalEditable: true });

	diffEditor.setModel({
		original: monaco.editor.createModel('', 'text'),
		modified: monaco.editor.createModel('', 'text')
	});
	
	var navi = monaco.editor.createDiffNavigator(diffEditor, 
	{
		followsCaret: true, // resets the navigator state when the user selects something in the editor
		ignoreCharChanges: true // jump from line to line
	});
});