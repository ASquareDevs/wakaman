/*************************************************************
* CommunicationOuterjs
*
*   Provides functionality to our iFrame Unity WebGL build that would otherwise be inaccessible due to CORS limitations with iFrame communication
*
*   Appended to the index.html of a webpage that is hosting our Unity WebGL build via an iFrame 
*   
*   Terminology:
*       'inner' - The index.html and it's associated javascript classes included as part of our Unity WebGL build template
*       'outer' - The webpage hosting our iFrame, alongside our javascript hosted in this BrandXRAPI.js file
**************************************************************/

//#region SEND MESSAGE TO UNITY

//---------------------------------------------------//
//Sends a message to the CommunicationInner.js
function SendMessageToUnity(e)
//---------------------------------------------------//
{
	console.log('SendMessageToUnity() // message' + e.data.data);
	var iframesInPage = window.parent.document.body.getElementsByClassName("enterpriseIframe");
	iframesInPage[0].contentWindow.postMessage( 'Input', "*" );

} //END SendMessageToUnity

//#endregion

//Attach an event listener on our webpage, which will listent to message sent by the iFrame
if( window.addEventListener )
{
	console.log('event added');
	addEventListener("message", SendMessageToUnity, false);
}
else if( window.attachEvent )
{
	window.attachEvent("onmessage", SendMessageToUnity, false );

}