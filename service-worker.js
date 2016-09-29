/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-box/app-box.html","bad81da0da6661cba3b585efd7732faa"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","a7474857c8dd25d6a9e5aabe763ec01f"],["/bower_components/app-layout/app-drawer/app-drawer.html","3949fa70e3797c54269a4abf7f361180"],["/bower_components/app-layout/app-grid/app-grid-style.html","e899275e1247821ae96efa7da4af6739"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","180db0000b27f96610bf1a8de988a3ab"],["/bower_components/app-layout/app-header/app-header.html","e4a8a8d2985df42fad5c12ccd241e0c8"],["/bower_components/app-layout/app-layout.html","8c1748893c5a70c63a6cf83cc85fad1f"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","6f59d3f5116eca983a1a375b77ad0fb5"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-scrollpos-control/app-scrollpos-control.html","bc1ca312eb9192253e0c8a2a267eb45e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-localize-behavior/app-localize-behavior.html","9f3c59ea36dcb0bfb560dd6adf3d1372"],["/bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["/bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["/bower_components/google-apis/google-youtube-api.html","95c7667f30f21ec613a3ffd1f716832e"],["/bower_components/google-map/google-map-marker.html","d4432d8c2b75325d455c0f975d76107a"],["/bower_components/google-map/google-map.html","534168cabc1c04eb05da60af3b687a10"],["/bower_components/google-youtube/google-youtube.html","3e9bf955b6c91b9ebcdc9ba90694de65"],["/bower_components/intl-messageformat/dist/intl-messageformat.min.js","6d09d1bd7317183aaa17fc78c1a8edd0"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["/bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","70904f32a519b07ec427d1a9a0c71528"],["/bower_components/iron-dropdown/iron-dropdown.html","0e2352a228fb17f90c345a4ffcca4b30"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","8d3799ca2f619ed4f31261bb03284671"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","5da6bac1d18d267691395cdc75820761"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-image/iron-image.html","72175f3ce2bc8e6bf3436ab8749b470e"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["/bower_components/iron-localstorage/iron-localstorage.html","acb3df7483568a40df937ed2eb161c3c"],["/bower_components/iron-location/iron-location.html","b999e8754a2e8fdde266884e47cefa04"],["/bower_components/iron-location/iron-query-params.html","065a00285a46f8483c74e363945499c9"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","d3f30152b76f2fa27e02739a99060a29"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","d7b9e877877c2ca1156c4c9fdd775e16"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","7f741ba06ffd837bf1697e8778b94731"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","ad45cbe59acee470fd6fd225082f1a9d"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/marked-element/marked-element.html","06fedd5fd9adfe0e8ee8159c9130abf5"],["/bower_components/marked-element/marked-import.html","935603373e4046660d3944abb73939f1"],["/bower_components/marked/lib/marked.js","eb770edf3f9eec6adb25b8fe65e15312"],["/bower_components/neon-animation/animations/cascaded-animation.html","3a5a8c22afe014a904557b66938c44ba"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/hero-animation.html","4feaf331f46d411ce9ad465da1dbb65e"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/animations/reverse-ripple-animation.html","1e08f758cb172f8fb19fabffc163a180"],["/bower_components/neon-animation/animations/ripple-animation.html","4d33252f387c84d0702efaaf510990b0"],["/bower_components/neon-animation/animations/scale-down-animation.html","e9cedffa151b388200cb2a610b2252fc"],["/bower_components/neon-animation/animations/scale-up-animation.html","20059304b9b7e9377379ad75110ef2fc"],["/bower_components/neon-animation/animations/slide-down-animation.html","31286bfe0b2cb6f28ef5e1f9d181f641"],["/bower_components/neon-animation/animations/slide-from-bottom-animation.html","12eea18013bf5b89c642fde725469a62"],["/bower_components/neon-animation/animations/slide-from-left-animation.html","cb18058340412077b0b0a8a7228a79a6"],["/bower_components/neon-animation/animations/slide-from-right-animation.html","79f28e3d4580cef016e6ae8c63384e98"],["/bower_components/neon-animation/animations/slide-from-top-animation.html","565391366846573f1725585d15b9baad"],["/bower_components/neon-animation/animations/slide-left-animation.html","a44c677c010daf7872b77f53bcd86e58"],["/bower_components/neon-animation/animations/slide-right-animation.html","b9908b67414ba0dfc7442eb1207d05fc"],["/bower_components/neon-animation/animations/slide-up-animation.html","bee63970c6ffc2706419533c9b2bd65e"],["/bower_components/neon-animation/animations/transform-animation.html","c64feaff2d50eb6f6633c644063c6aa3"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animatable.html","a0ca09f4fb19c4c83a2e501f666aa9b7"],["/bower_components/neon-animation/neon-animated-pages.html","8bb61cb8467f755163cec87e954425fc"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/neon-animation.html","64a31fddf24983589825e7f0feaedbb8"],["/bower_components/neon-animation/neon-animations.html","3b6524b3cc95f27b4b6d7821a7097137"],["/bower_components/neon-animation/neon-shared-element-animatable-behavior.html","d891492be81d44fcf6dfb54fd8d73ae2"],["/bower_components/neon-animation/neon-shared-element-animation-behavior.html","59b343c52eef4ff93901a3cba99577d6"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f061a077ee938fac479622156071296"],["/bower_components/paper-card/paper-card.html","c057c1a99e521f817eab9af733ce2471"],["/bower_components/paper-checkbox/paper-checkbox.html","6a891a16405b9578c46dab7dbdcda1c9"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","8fb5282b6149bc429b6baef5c077a285"],["/bower_components/paper-fab/paper-fab.html","b3ad1553b61ad0996a0371b94efe2164"],["/bower_components/paper-icon-button/paper-icon-button-light.html","725ebc58ebba6519578c142d3b9edb10"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","794d6d48fd81620a935f7702b56c9853"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","3385511052db3467ca6ec155faa619ad"],["/bower_components/paper-item/paper-icon-item.html","17d1540072712073af1a84ae9b0ba06a"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-body.html","8b91d21da1ac0ab23442d05b4e377286"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","2b2f79e8b3b50e4aabd2dd3ada9b6814"],["/bower_components/paper-menu/paper-menu-shared-styles.html","9b2ae6e8b26011a37194ea3b4bdd043d"],["/bower_components/paper-menu/paper-menu.html","5270d7b4b603d9fdfcfdb079c750a3cd"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html","24210b806838797844a91a0b83771bbe"],["/bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["/bower_components/paper-spinner/paper-spinner-styles.html","a2122d2c0f3ac98e6911160d8886d31a"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","395fdc6be051eb7218b1c77a94eff726"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","2bf908cedd6ff6e67c18dbf337787bcc"],["/bower_components/paper-toast/paper-toast.html","f64d10724104f3751cae8b764aef56ff"],["/bower_components/paper-toolbar/paper-toolbar.html","ff99e4e6d522685e7e4d04f290e8ac9b"],["/bower_components/paper-tooltip/paper-tooltip.html","ba34997662a16417bf99bac94287a986"],["/bower_components/polymer/polymer-micro.html","7739e37db5581472b91925e5fa9bde55"],["/bower_components/polymer/polymer-mini.html","9e9dfb157eae29a59c98343288d4d120"],["/bower_components/polymer/polymer.html","2dce719d53b7ea549067d3d21a2b2c29"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/time-elements/time-elements.js","a3f49327ed2412dc9044077500392a59"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","04197e2ccec914fa460eef2ac140c853"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","966dfc623f261b214a06d7435f2068ee"],["/data/en/resources.json","b0178feaec300329cc753073519a007d"],["/data/hoverboard.config.json","bae65624670518078635bf4eb78e3022"],["/data/partners.json","b2173b054b23ddc286a0cc1c709fe495"],["/data/posts/2015-10-24-devfest-ua-summary.markdown","68c408c5dac1a4299379a031482c63f5"],["/data/posts/2016-05-04-devfest-2016-announced.markdown","bdb4d8f7d8c62d4ffc6ef7d65bcc6876"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/code-of-conduct.markdown","d36b81f26dc0701bf2d5f8924f2fb4d8"],["/data/pt_BR/resources.json","3f84a96e71972aceb8ec63f31a93741a"],["/data/schedule.json","9e42ed613f4e9f23dddc494433293deb"],["/data/sessions.json","ae8773ac935db43152a1e0910fa123ad"],["/data/speakers.json","74dc9e39a31407b64ab4710b00dd3e38"],["/data/team.json","5223a0ee832a99e2c6d2eb598149cee9"],["/data/tweets.json","80b8481b23c5a2e43a316f24b8973f04"],["/data/videos.json","d33a117f430cbdb53d3c59b95a51fd8c"],["/images/DevFestBH-textLogo.png","176e59aaf84d71441534ae0dc18eff9d"],["/images/backgrounds/2015_1.jpg","94fa5cf2f72d2e60c369a22d6397faf1"],["/images/backgrounds/2015_2.jpg","8bc88e2ab15210f32653fc9481da85a7"],["/images/backgrounds/2015_3.jpg","c6825c466865f0e21b5a7589372a29db"],["/images/backgrounds/blog.png","7720ef34105642a482c86b5a1200d87c"],["/images/backgrounds/closing.jpg","fa9174cbf6a77ebe18e8f1f6d3c28732"],["/images/backgrounds/cod.png","2591e78a103fd77bae31dd13ac1fd966"],["/images/backgrounds/coffee-break.jpg","3862865f20769a4dd5690a2f9fc8e722"],["/images/backgrounds/cta.png","742cc56d6bc1729e5c34c1764f37b9f4"],["/images/backgrounds/home.png","e5e418067a76b7b55d3b22da468a3c7a"],["/images/backgrounds/location_bg.jpg","ca6f096401eb2f7f103effe25209f5a4"],["/images/backgrounds/location_card.jpg","4068851ca48edd276f049de5184379ae"],["/images/backgrounds/lunch.jpg","c4af1cfe42c0d7292515b11cf6e96e0b"],["/images/backgrounds/opening.jpg","09ee22ab59391df009a31c3f21b9fa75"],["/images/backgrounds/registration.jpg","938161b4943a228adb9398feb75c70b3"],["/images/backgrounds/schedule.png","3b7a2391137c7935f629e4726550aead"],["/images/backgrounds/speakers.png","a1eddb315806802a1786522d9312084b"],["/images/favicon/favicon-01.png","1df118eeecb66a590e4619bca8f6bef9"],["/images/favicon/favicon-32.png","e904bb6832ed5eeb62844ff8be19060e"],["/images/favicon/favicon-72.png","4d3c099e689ab05a121518686840bfd0"],["/images/favicon/favicon.ico","e810a02edd4254b867ff0328ae860e35"],["/images/gdg-logo.svg","3c06f508491591d085e2e8a512a35586"],["/images/logo-white.svg","ad5daedc956626f7f554b7e8b9542ffe"],["/images/logo.svg","f516b305a52ab3d3694426fd03f88c0d"],["/images/logos/gdg-bh.svg","3c06f508491591d085e2e8a512a35586"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/people/adrian_kajda.jpg","0f6b1f6e0fb8456b0e502fb68d63b890"],["/images/people/aleksander_piotrowski.jpg","3fdea37afaadb582de5d3db734ca7449"],["/images/people/anton_minashkin.jpg","8743cba298093dd9d8753df54ffa3eb2"],["/images/people/carmen_popovicu.jpg","a965e4967c7e404c1160aaed7bfd2504"],["/images/people/constantine_mars.jpg","a2012f812425ef17db86a22ee1a7d3a9"],["/images/people/david_mayboroda.jpg","f8a82fa9a9501f993f07f1047af36500"],["/images/people/david_vávra.jpg","36b36fbfd39cf79811b709a59b584c69"],["/images/people/diana_pinchuk.jpg","a8fededa520a70d7b15ca9855f4274b4"],["/images/people/dmytro_danylyk.jpg","055e47dbd06c0310fe2ad2eef2ce33e8"],["/images/people/gerard_sans.jpg","f27a13dd6f6c6900d0641c930d7acfc6"],["/images/people/ihor_dvoretskyi.jpg","a972b997723d51d76e1a8e5b1639ece9"],["/images/people/jakub_škvára.jpg","91d772c2d43a89ebf9ff2db6f9d7da09"],["/images/people/jana_moudra.jpg","599274aedd2628e4cca8f25a06de9c42"],["/images/people/jean-baptiste_clion.jpg","9deb5786962a4c5cda8d418979b1dc36"],["/images/people/jozef_vodicka.jpg","a637531e56379d8fd17e193ad41feac2"],["/images/people/konrad_dzwinel.jpg","87fa8ec3b0c03fbf1ec7fbb76f095001"],["/images/people/marta_maxymiak.jpg","66cf6a7ffbb589914516f2303cc3274b"],["/images/people/mateusz_herych.jpg","26b070ef0b1a9ea3524a81120e00a584"],["/images/people/mete_atamel.jpg","f6d464313c22a02cb7b614465fad34ad"],["/images/people/michael_pustovit.jpg","06067095649e59a0829702546b9ffa9e"],["/images/people/oleh_zasadnyy.jpg","65455c422b00d757659a32eccf6f74bd"],["/images/people/ostap_andrusiv.jpg","075350bcb64d4ae4e39c23f10a864215"],["/images/people/paul_lammertsma.jpg","7e36e7d6a582245a666edad0fc7a0e18"],["/images/people/resul caner_yildirim.jpg","cc8cfb34921892bbedde00756a7495b7"],["/images/people/roman_herasymenko.jpg","db34757871038f0d9f4fd5f62e460e46"],["/images/people/rustem_arzymbetov.jpg","257f8f63371fd3c2148000d5c5cda7c7"],["/images/people/sascha_wolter.jpg","ccd15e09478bfe988cc05904b29662bc"],["/images/people/sergii_khomenko.jpg","75f5812d1dfa3f5d9e0dc21dc15efd7c"],["/images/people/sergiy_mokienko.jpg","ca54f122a83434cf9d041e1f1030f6bf"],["/images/people/sofiya_huts.jpg","79853274bd9e03af2d6d253e7a6fcce9"],["/images/people/valentyn_shybanov.jpg","f20c647b7afdf41dfe5f77c413e4c19d"],["/images/people/vasylyna_mytsak.jpg","02e5c75ae5e27012723770d2365a0af9"],["/images/people/vitaliy_zasadnyy.jpg","6e6d03c367f0bec66080792c59516b3b"],["/images/people/volodya_karpliuk.jpg","6dd8b956989a8906aae87aea38092a48"],["/images/people/yonatan_levin.jpg","6ab778d9178aae877f3c09aca42f6b5a"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/social-share.png","bc631d3a08f3df844c7dac135065f7a4"],["/images/space-icon.png","43703208f732b6293aae0acaf706b592"],["/images/touch/homescreen-144.png","729547a748eee9b7ef49d93c13e009cc"],["/images/touch/homescreen-168.png","577afe83b0363d05c303e0a7b36f6e5f"],["/images/touch/homescreen-192.png","c49e4ead80ddaf6e9159ea4ab59e1548"],["/images/touch/homescreen-256.png","cf7340e3a8c9d256238f1659d58ed4f4"],["/images/touch/homescreen-48.png","8e49a6cef8256e3d779a27e7ec8af6a2"],["/images/touch/homescreen-72.png","84bf30e4a746876ad28ecdb37f8f72b2"],["/images/touch/homescreen-96.png","ef324fbdbfd35ba0deade0e2ee3973a9"],["/index.html","87e30111d4150f1b057ab65ad222d785"],["/manifest.json","ba5213bb8ac17d6d558b9ef604f917f8"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","98930cb28063b57cd6cf06a3079a5f9f"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","19668c5219b9844f43c04d0754b18527"],["/src/elements/drawer-block.html","ea984cd3fca83cf56a8e58e5b138382a"],["/src/elements/featured-people.html","cb7d4597f28edcf88bf14b8480c59d25"],["/src/elements/featured-videos.html","80d4e598376a9dc8df9aaf1e8ba40108"],["/src/elements/footer-block.html","cbe61825c0323a58b46e69b6830b5df1"],["/src/elements/header-content.html","e9ab2b0b8b0706f916e8dae22ae0be33"],["/src/elements/latest-posts.html","196d09b172ed2c2fffc22ac21b583497"],["/src/elements/logos-block.html","fd79150d1b4b5a20bdc23ce9ffe44901"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","aa241439cc2734470ab89fffab28fd81"],["/src/elements/photo-block.html","cd63ed8f15fbab100040b2bb3df6bd40"],["/src/elements/schedule-day.html","5872710494dd1a23b2994bf3cf94619d"],["/src/elements/schedule-subnav.html","3ad4d6b985e0e42d510f3a2bc5927597"],["/src/elements/session-details.html","29c1f46f8ec7d30b3e17f59a91d831d1"],["/src/elements/social-feed.html","fa4b6815f37f5a0d2711e82b0375ca96"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/spaces-block.html","994b2913d12fdddb9c2451862a11ba0d"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","cb2ae661148d78d22217b9bc0450f77f"],["/src/elements/ticket-element.html","279760c18f4ce94c3be61343a144c985"],["/src/elements/tickets-block.html","758e7fb7ac19a45b85456372f682a860"],["/src/elements/toast-element.html","d26f879617a6c9d8a1ef57a0e1073142"],["/src/elements/toolbar-block.html","214c354cc22d690652ef63fbdfb89ec6"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","c724c145f0138bf1236334e3ac0cd56a"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","57e30ca6565b2b080db6beb918fa7eb2"],["/src/pages/blog-page.html","8e7322adf87219ac6e6462f51f5461e6"],["/src/pages/cod-page.html","4a25305ce338cd6df40d36ee6b520335"],["/src/pages/home-page.html","a092ac97585924250fe2bb971e1a003a"],["/src/pages/post-page.html","cdc2954d504ae81ecbf420eeafb9e4f5"],["/src/pages/schedule-page.html","8486021aaf8ba602caa9fde35ae707b5"],["/src/pages/speakers-page.html","f8299fa9d1dc40c0db66dd3cf522983b"],["/src/pages/team-page.html","66142103938a4cdca59f43a6366e4106"],["/src/styles/dialog-styles.html","f1910f8e1c4247e0e2c4e99814615b7a"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","c9c5de9433699ee9db21987a448ee931"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




