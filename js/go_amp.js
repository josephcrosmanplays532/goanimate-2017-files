var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var AMPLITUDE_EVENT={SIGN_UP:"Signup",PLACE_ORDER:"Place order",UPLOAD_ASSET:"Uploaded asset",LAUNCH_VM:"Launched video maker",WATCH_VIDEO:"Watched a user video",CONVERT_VIDEO:"Converted video",SHARE_VIDEO:"Shared video",VISIT_PRICING:"Visited the pricing page",VISIT_PAYMENT:"Visited the payment page",VISIT_RESOURCE_CENTER:"Visited resources center",WATCH_ONSITE_VIDEO:"Watched an on-site video",TOGGLE_AUTO_RENEW:"Toggle auto renew",CREATE_CHARACTER:"Created character",SAVE_STARTER:"Saved starter",SAVE_VIDEO:"Saved video",CHOOSE_TEMPLATE_CATEGORY:"Chose template category",FAVOUR_TEMPLATE_CATEGORY:"Favorited template category",SWAP_ASSET:"Swapped asset",COMPLETE_TUTORIAL:"Completed Tutorial",VISIT_HELP_CENTER:"Visited the help center",VISIT_BLOG:"Visited the blog",LOGIN:"Login",LOGOUT:"Logout",VISIT_MAKE_A_VIDEO_PAGE:"Visit Make a Video page",LAUNCH_CHARACTER_CREATOR:"Launch character creator",DELETED_VIDEO:"Deleted video",VISIT_YOUR_VIDEOS_PAGE:"Visit Your Videos page",VISIT_ACCOUNT_SETTINGS_PAGE:"Visit account settings page",CREATE_FOLDER:"Create folder",DELETE_FOLDER:"Delete folder",BEGIN_TUTORIAL:"Begin tutorial",SKIP_TUTORIAL:"Skip tutorial",PREVIEW_VIDEO:"Preview video",ADD_SCENE:"Add scene",SWITCH_CHARACTER_ACTION:"Switch character action",ADD_VOICE_TO_SCENE:"Add voice to scene",ADD_ASSET_TO_STAGE:"Add asset to stage",TOGGLE_ATTACH_VOICE_TO_SCENE:"Toggle attach voice to scene",ADD_SCENE_TEMPLATE:"Add a scene template",SEARCH_ASSETS_OR_TEMPLATES:"Search assets or templates",REVISION_HISTORY:"Revision history",CANCEL_GOTEAM_MEMBER_INVITE:"Cancel of GoTeam member invite",BROWSED_FEATURED_VIDEO:"Browse a featured video",VISITED_HOMEPAGE:"Visited homepage",VISITED_FREE_TRIAL_PAGE:"Visited free-trial page",PAGE_VIEW:"Page view",WATCH_EMBED_VIDEO:"Watched embedded video",PLAYS_VIDEO:"Plays video",VISITED_HOW_TO:"Visited the How-to page",PREVIEW_FALLBACK_SWITCH:"Preview fallback switch",VIDEO_PLAYER_SWITCH:"Video player switch",CONNECT_TO_3RD_PARTY:"Connect to 3rd party",DISCONNECT_FROM_3RD_PARTY:"Disconnect from 3rd party",DOWNLOAD_FILE:"Download file",VIEW_PLANS_FROM_VIDEO_PAGE:"View plans from Video page",WATCH_DEMO_ON_VIDEO_PAGE:"Watch demo on Video page",TOGGLE_FULLSCREEN:"Toggle fullscreen",CTA_FEATURED_TEMPLATES:"CTA Featured templates",CTA_THEME_SELECT:"CTA Theme select",H5_VISUAL_WAIT:"H5 Visual Wait",H5_TOTAL_WAIT:"H5 Total Wait",VIDEO_UNAVAILABLE_PAGE:"Video Unavailable Page",VIDEO_ACCESS_LINK:"Video Access Link",VIDEO_STATUS:"Video Status",INVITE_COLLABORATOR:"Invited a Collaborator",REMOVE_COLLABORATOR:"Removed a Collaborator",VISITED_PASSWORD_PAGE:"Visited Password Page",CTA_GET_PASSWORD:"CTA Get Password",ENTER_PASSWORD:"Enter Password",TOGGLE_PASSWORD_CONTROL:"Toggle Password Control",VISIT_POWERPOINT_IMPORT_PAGE:"Visit Powerpoint Import page",IMPORT_POWERPOINT:"Import Powerpoint",VISITED_PUBLIC_USER_PAGE:"Visited Public User page",VISITED_ACTIVATION_PAGE:"Visited the Activation page",VISIT_VIDEO_PAGE:"Visit Video Page",SURVEY_TRANSFER_RIGHTS:"Survey Transfer Rights",CTA_TRANSFER_RIGHTS:"CTA Transfer Rights",GOTEAM_INQUIRY_FORM:"GoTeam Inquiry Form"},AMPLITUDE_USER_PROPERTY_KEYS={AUTO_RENEW:"auto_renew",JOB_ROLE:"job_role",TOTAL_SAVED_VIDEOS:"total_saved_videos",TOTAL_CURRENT_FOLDERS:"total_current_folders",TOTAL_SHARED_VIDEOS:"total_shared_videos",TOTAL_DOWNLOAD_VIDEOS:"total_downloaded_videos",LATEST_PREVIEW_METHOD:"latest_preview_method",LATEST_PLAYER_METHOD:"latest_player_method"},AMPLITUDE_EVENT_PROPERTIES={VM_NEW:"New",VM_EDIT:"Edit",VM_COPY:"Copy",VM_REMIX:"Remix",CONVERT_MP4:"mp4",CONVERT_GIF:"gif",CONVERT_PRESENTATION:"presentation",CONVERT_HTML5:"html5",CONVERT_HTML5_PRESENTATION:"html5presentation",SHARE_YOUTUBE:"youtube",SHARE_LECTORA:"lectora",SHARE_VIEWBIX:"viewbix",SHARE_WEVIDEO:"wevideo",SHARE_WISTIA:"wistia",SHARE_VIDYARD:"vidyard",SHARE_VZZAR:"vzzar",SHARE_GOOGLE_PLUS:"google_plus",SHARE_FACEBOOK:"facebook",SHARE_PINTEREST:"pinterest",SHARE_HUBSPOT:"hubspot",SHARE_LINKEDIN:"linkedin",SHARE_REDDIT:"reddit",SHARE_TWITTER:"twitter",SHARE_STUMBLEUPON:"stumbleupon",SHARE_TUMBLR:"tumblr",SHARE_LINK_SHARE:"link_share",SHARE_EMBED:"embed",PLAN_GOPUBLISH:"gopublish",PLAN_GOPREMIUM:"gopremium",PLAN_GOTEAM:"goteam",AUTO_RENEW_ON:"on",AUTO_RENEW_OFF:"off",TEMPLATE_CATEGORY_FAVORITE:"favorite",TEMPLATE_CATEGORY_UNFAVORITE:"un-favorite",CHARACTER_STOCK:"stock",CHARACTER_CUSTOM:"custom",BEGIN_TUTORIAL_FIRST_TIME_USE:"first_time_use",BEGIN_TUTORIAL_MANUAL:"manual",VOICE_INPUT_MIC:"mic",VOICE_INPUT_TTS:"tts",VOICE_INPUT_IMPORT:"import",VOICE_INPUT_LIBRARY:"from_library",ADD_ASSET_CHARACTER:"character",ADD_ASSET_PROP:"prop",ADD_ASSET_WIDGET:"widget",ADD_ASSET_TEXT:"text",ADD_ASSET_AUDIO:"audio",ADD_ASSET_VIDEO:"video",ADD_ASSET_BACKDROP:"backdrop",ADD_ASSET_STARTER:"starter",VOICE_SCENE_ATTACH:"attach",VOICE_SCENE_UNATTACH:"unattach",SEARCH_ASSET_PROPS:"props",SEARCH_ASSET_BACKDROPS:"backdrops",SEARCH_ASSET_TEMPLATES:"templates",SEARCH_ASSET_AUDIO:"audio",VIDEO_RESOLUTION_1080:"1080",VIDEO_RESOLUTION_720:"720",VIDEO_RESOLUTION_480:"480",VIDEO_RESOLUTION_400:"400",VIDEO_RESOLUTION_360:"360",VIDEO_RESOLUTION_240:"240",VIDEO_RESOLUTION_NA:"n/a",YES:"yes",NO:"no",HOSTING_PAGE:"hosting page",REFERRAL:"referral",PREVIEW_METHOD_LEGACY:"legacy",PREVIEW_METHOD_HTML5:"html5",PREVIEW_ACTION_LEGACY_TO_HTML5:"legacy_to_html5",PREVIEW_ACTION_HTML5_TO_LEGACY:"html5_to_legacy"};function amplitudeSetUserProperty(c,a){var b=new amplitude.Identify().set(c,a);amplitude.identify(b)}function amplitudeIncrementUserProperty(c,b){var a=new amplitude.Identify().add(c,b);amplitude.identify(a)}function amplitudeTrackEvent(a,d){if(amplitude!==undefined){if(d===undefined){amplitude.logEvent(a)}else{var b={};for(var c in d){if(d[c]!==null){b[c]=d[c]}}amplitude.logEvent(a,b)}}}function amplitudeTrackPlaceOrder(a,b){if(a!==undefined){amplitudeTrackEvent(AMPLITUDE_EVENT.PLACE_ORDER,{plan:a,error_message:b})}}function amplitudeTrackGoTeamPlaceOrder(a,c,b){if((a!==undefined)&&(c!==undefined)){amplitudeTrackEvent(AMPLITUDE_EVENT.PLACE_ORDER,{plan:a,seat_number:c,error_message:b})}}function amplitudeTrackAutoRenew(a){var b=a?AMPLITUDE_EVENT_PROPERTIES.AUTO_RENEW_ON:AMPLITUDE_EVENT_PROPERTIES.AUTO_RENEW_OFF;amplitudeTrackEvent(AMPLITUDE_EVENT.TOGGLE_AUTO_RENEW,{target:b})}function amplitudeTrackShare(d,a,c,b){if(d!==undefined){amplitudeTrackEvent(AMPLITUDE_EVENT.SHARE_VIDEO,{target:d,export_resolution:a,duration:c,video_id:b});amplitudeIncrementUserProperty(AMPLITUDE_USER_PROPERTY_KEYS.TOTAL_SHARED_VIDEOS,1)}}function getAmplitudeVideoResolutionValue(a){switch(a){case"1080p":return AMPLITUDE_EVENT_PROPERTIES.VIDEO_RESOLUTION_1080;case"720p":return AMPLITUDE_EVENT_PROPERTIES.VIDEO_RESOLUTION_720;case"480p":return AMPLITUDE_EVENT_PROPERTIES.VIDEO_RESOLUTION_480;case"360p":return AMPLITUDE_EVENT_PROPERTIES.VIDEO_RESOLUTION_360;case"240p":return AMPLITUDE_EVENT_PROPERTIES.VIDEO_RESOLUTION_240;default:return AMPLITUDE_EVENT_PROPERTIES.VIDEO_RESOLUTION_NA}};

}
/*
     FILE ARCHIVED ON 06:07:08 Jan 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:47:00 Feb 21, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.01
  captures_list: 252.829
  RedisCDXSource: 0.55
  LoadShardBlock: 70.338 (3)
  exclusion.robots: 154.483
  xauthn.identify: 83.617
  PetaboxLoader3.resolve: 67.358 (2)
  load_resource: 256.781 (2)
  xauthn.chkprivs: 70.517
  PetaboxLoader3.datanode: 93.717 (5)
  exclusion.robots.policy: 154.468
  CDXLines.iter: 23.777 (3)
*/
