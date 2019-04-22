/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ae79aa103a4bea7ba3abf6560b47aa92"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.59e11fb5.js",
    "revision": "fcef19ea821784e537571c3639c80c08"
  },
  {
    "url": "assets/js/13.8a5c49b9.js",
    "revision": "0f4a0c610fa679e0d4e095788198e5ea"
  },
  {
    "url": "assets/js/14.f5c4fb74.js",
    "revision": "ef8765f633bd6e9e8f247dcd9457b00a"
  },
  {
    "url": "assets/js/15.fecfbe04.js",
    "revision": "d2f758171856101e082ef7ffdb680425"
  },
  {
    "url": "assets/js/16.cd7bb9e7.js",
    "revision": "1cc8ce77962ff1c31c35c73623f0fdcd"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.26790f7e.js",
    "revision": "afb7f6da193a1e0b13468f641136934b"
  },
  {
    "url": "assets/js/19.31ce180d.js",
    "revision": "4b573c3f3008aba2d564252d1a5e5bfc"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.e4d493ab.js",
    "revision": "11d910c8977dd4f058ee1d04d39365a1"
  },
  {
    "url": "assets/js/21.d8f66771.js",
    "revision": "66e715e21f645e4807b683fc2c467473"
  },
  {
    "url": "assets/js/22.3d55beeb.js",
    "revision": "08830a74cf8d4a6ade6b55eda55959ff"
  },
  {
    "url": "assets/js/23.40ec0da2.js",
    "revision": "def9b952db1e2c33007ea7a1b4d3e1c5"
  },
  {
    "url": "assets/js/24.89b522f3.js",
    "revision": "6ba8042970fb1929984d0096c8a894d4"
  },
  {
    "url": "assets/js/25.fd161f03.js",
    "revision": "a1b528282351727b5ded515a55dc1911"
  },
  {
    "url": "assets/js/26.d491a4c6.js",
    "revision": "8ae995c6e57a07251520885f4972ccba"
  },
  {
    "url": "assets/js/27.cec41180.js",
    "revision": "ab981aeeb2586eac9e89036ef3ff4289"
  },
  {
    "url": "assets/js/28.8b723ad9.js",
    "revision": "245b02ce7d183ce41e0b5c875de81ae4"
  },
  {
    "url": "assets/js/29.a5cbd2c2.js",
    "revision": "285d6d716d1f68fbf397701616834095"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.d0f509d8.js",
    "revision": "43c4ce999b8322cf0f785be298e149b9"
  },
  {
    "url": "assets/js/31.8825a69b.js",
    "revision": "3c750568e73307ceb6f0f840e285b9f9"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.70b37c1e.js",
    "revision": "aa9d2287f0ab27ca501aaa1265964780"
  },
  {
    "url": "assets/js/34.9d9b74a1.js",
    "revision": "6b880e82f84b38fc877f84217f18798a"
  },
  {
    "url": "assets/js/35.059804e8.js",
    "revision": "758460fcb66788726842e7edb2b2b4eb"
  },
  {
    "url": "assets/js/36.0dff3eca.js",
    "revision": "8d099040c3e0a01e0edc8de622f22cec"
  },
  {
    "url": "assets/js/37.1d1c2c62.js",
    "revision": "a4e2cdf0418ef3f861ad8c852fa11812"
  },
  {
    "url": "assets/js/38.dfc6af1b.js",
    "revision": "6fa1f603ddf95e9a3e1df5e68a641041"
  },
  {
    "url": "assets/js/39.f17651e5.js",
    "revision": "f610b628c2fb4e61c0f4a40bb4d4e434"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.6bfb0415.js",
    "revision": "283ff2c9556e268352c58fa5689ad509"
  },
  {
    "url": "assets/js/41.8ac4503e.js",
    "revision": "97fc408dc7a3e66e604c493131d6daa1"
  },
  {
    "url": "assets/js/42.9c9ccb5e.js",
    "revision": "16896384b6e4329a352f44a239d1e150"
  },
  {
    "url": "assets/js/43.c8b5f2aa.js",
    "revision": "9053946a4dcbea7a37ea4a051f788870"
  },
  {
    "url": "assets/js/44.b0f6a993.js",
    "revision": "a1f1d6ed7c0f627167c0ea49f8908a89"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.c493dcec.js",
    "revision": "963476654a87d7dd4a3e7e2b6a31905b"
  },
  {
    "url": "assets/js/47.385f9faa.js",
    "revision": "c498866788cb09ed0e352ee912c81b4e"
  },
  {
    "url": "assets/js/48.89edf591.js",
    "revision": "264ef0dcd8be0587976541e11c6b1fa4"
  },
  {
    "url": "assets/js/49.53b82d7e.js",
    "revision": "35d7146f973dc092afb47cec7dc53e40"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.2858d463.js",
    "revision": "59007c057a23f3cf12988745edd13c07"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.b35c8a45.js",
    "revision": "7dac7c1c6415364fcb295e966323ee34"
  },
  {
    "url": "assets/js/54.ad255086.js",
    "revision": "172c84da9b26521b5372ec9490c24d51"
  },
  {
    "url": "assets/js/55.5d6220ee.js",
    "revision": "1e89784b0dbfc112863c3006e79a58a9"
  },
  {
    "url": "assets/js/56.8d48792e.js",
    "revision": "c8ec1070d3145604cf730b36463245ff"
  },
  {
    "url": "assets/js/57.0bf24da0.js",
    "revision": "9f7d1ef9ec579b1d0166191a968f7b1c"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.29aa6e54.js",
    "revision": "f9f2db9dc6f0bae720198fdd6e3251aa"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.ff3840cc.js",
    "revision": "3e8d3537a00b1e09e1d5328f250d19d8"
  },
  {
    "url": "assets/js/62.010d029e.js",
    "revision": "2acfc7437737c9f0ac003065a9f6f371"
  },
  {
    "url": "assets/js/63.9bfff661.js",
    "revision": "ed25bc31a853c263f4e5b45f732e04d0"
  },
  {
    "url": "assets/js/64.dc692e44.js",
    "revision": "c3b64c00950696df80de84321109b34e"
  },
  {
    "url": "assets/js/65.5e14bfa2.js",
    "revision": "037beaebedb2b130abaeac94a9159559"
  },
  {
    "url": "assets/js/66.4499d6d6.js",
    "revision": "5be1622df6dfbe80409a90266d87006a"
  },
  {
    "url": "assets/js/67.c4b18a69.js",
    "revision": "e51b47a53bbb821e49120aeb80e164bf"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.45bdf16a.js",
    "revision": "833fff53392b4617421eecb5316f47ed"
  },
  {
    "url": "assets/js/71.b48ad246.js",
    "revision": "1d5ee42148292f6cdcec47d865ef153e"
  },
  {
    "url": "assets/js/72.3b0ddd89.js",
    "revision": "eac1a245f9d9aba2b59c51f8260e0cff"
  },
  {
    "url": "assets/js/73.b4698a7b.js",
    "revision": "b0cddfab25c441fb37b2bc096f8c2c19"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.b23255bc.js",
    "revision": "71ca71c93edf951c6b1747e4ddcb705c"
  },
  {
    "url": "assets/js/76.bfd73f27.js",
    "revision": "7cb06ebf7d0ad19bffcb5fb42ae29809"
  },
  {
    "url": "assets/js/77.2421ecf7.js",
    "revision": "80e3676fcf8372baba89df2e6804918b"
  },
  {
    "url": "assets/js/78.9af7ed4a.js",
    "revision": "477bbaa94ba57814b341878d668335d6"
  },
  {
    "url": "assets/js/79.094b1730.js",
    "revision": "bb34dd901ea876f47813089d4ef52a1b"
  },
  {
    "url": "assets/js/8.3a967442.js",
    "revision": "e2418b2a333ba6b5e7c3f533a226a5e8"
  },
  {
    "url": "assets/js/80.dbba0d11.js",
    "revision": "60e6e3f6d47d5cb02d81179ae6fb45b2"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.50aa96de.js",
    "revision": "8415378adf9372a1679e4f0777e74dea"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.cb4fd120.js",
    "revision": "856c6f25a0119bfb861c65057b384e25"
  },
  {
    "url": "assets/js/85.03664995.js",
    "revision": "52b61b2258d093ffd89955bdfdf3b2a8"
  },
  {
    "url": "assets/js/86.926878e7.js",
    "revision": "bd73564e6b08c94c0876d9cedc8281a4"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.a28809da.js",
    "revision": "e8d19045bcc22d57ff5d4ab42fea1b0a"
  },
  {
    "url": "compiler/ast.html",
    "revision": "b45e9dc091132b9ecbd6db662b8f7b61"
  },
  {
    "url": "compiler/binder.html",
    "revision": "68e7a6c80bd72dd38ab9250208ee603e"
  },
  {
    "url": "compiler/checker.html",
    "revision": "a9f071e37ec22da41c7c6afcea7c645f"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "324c19e85cdfc4832490fb175de0d173"
  },
  {
    "url": "compiler/overview.html",
    "revision": "d351851323bc4bc93322a22869e6560c"
  },
  {
    "url": "compiler/parser.html",
    "revision": "412da053e2b4b1ece7c1c8fc6c9076da"
  },
  {
    "url": "compiler/program.html",
    "revision": "11e96bacade6cbd8f8539f8dbe25d4e7"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "02e4a7089b2f3f629646e0444f1213da"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "6ece426461388a824450fecffa6513cf"
  },
  {
    "url": "error/interpreting.html",
    "revision": "1588b20d909fbcee24fb821cf1365408"
  },
  {
    "url": "faqs/class.html",
    "revision": "4f7b09ff2750ef6a3d5f68679e975d78"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "524aed7ae7398cfb84e21e90698700f5"
  },
  {
    "url": "faqs/comments.html",
    "revision": "b00a30b28c6ff3d35b9bf1fc557e9a2a"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "71311905c49f90e761911fa8551795b4"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "3618eafd957d2dd5e09c7c352f0b6726"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "96405d082d22fd4de600316de4f0c89b"
  },
  {
    "url": "faqs/enums.html",
    "revision": "e21595fd0950cad35a55e5cca61ee27f"
  },
  {
    "url": "faqs/function.html",
    "revision": "2d9ebec9a91249808a9822b5ed19ae55"
  },
  {
    "url": "faqs/generics.html",
    "revision": "16f0129a9ebacfaa124e04661281a724"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "f0d92b09880db5ccd1ee9489780b6edc"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "f3c2d30bcb1dc7e9103024c273a1e3ec"
  },
  {
    "url": "faqs/modules.html",
    "revision": "49bdfb33024f3191207007c96c9f33b1"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "d114828abbc3a3fc4a95fa1d65762bc3"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "0694fc59b8e0ac4c72d602f468f869e5"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "203cf08269908589e4a054ba9b9d41aa"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "02550d2740e28dc94a1be6fdbd4181a5"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "055003f7ebd4edd349b661da31b73300"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "2d64bd2daf2fff97ed6d810aed2c71b7"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "c38ba7691abbc19c02438e481efafd92"
  },
  {
    "url": "jsx/support.html",
    "revision": "bbedc7b8590915a0f2758326bc14dfb8"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "0fe9d0079cbbf61b51c7080d363e633f"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "ed0474240359e9f642807f55480249ea"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "3b6267f8ed2363fe656cd2d6c094767f"
  },
  {
    "url": "project/modules.html",
    "revision": "be03176f448cb35ff7568fa6948ba544"
  },
  {
    "url": "project/namespaces.html",
    "revision": "6093982215281ac79cf4fb45686c09f2"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "6308ab9d2ecb6bfecae79d044b53849d"
  },
  {
    "url": "tips/barrel.html",
    "revision": "b16c92cb62a9c9e8718a5f719b569875"
  },
  {
    "url": "tips/bind.html",
    "revision": "4c13340268658622899472024377148e"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "b1742d9211820826e02e746030eb1a8c"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "96f507a227427b9db4dafccce01b6c79"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "5cb72918bf4cb5eef1523a32a541e43c"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "676c05e107ddaef607db6921cd64f1f8"
  },
  {
    "url": "tips/curry.html",
    "revision": "700ddb1e101313843ac8ffdb792cfd9a"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "5c1e2fc610bfad284086fdf9cd4362a4"
  },
  {
    "url": "tips/infer.html",
    "revision": "5735a7f653ce55f0710266e8970f54d5"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "b1db1bd5ae6943f0e2bc8a9367a9f553"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "9c9f59b37d920783d286f6670bc674d0"
  },
  {
    "url": "tips/metadata.html",
    "revision": "6dce8eacec7b0f131a86b840b8ca75da"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "ca36b5b59b5d7dd6ea45d7dfbc1707ef"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "01aef5a279a2e73d933e51d27b894d01"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "f82aaf1ba30b8e7cd5ad331777680cd6"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "ef13dfe76c8faa6e15a1292c40bf302a"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "7e00589edd5d268e75e02d55f5ba2d46"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "49a227fa31f195a1479903ba17a0cbe7"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0aed415c1b2725c27a4dff13fe302ae1"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "7e052dabd5ce14f2c2a4181226c861f8"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "9301e43cfae2083f2418f2409b753ca2"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "197135904b89a7a1f9c8abe5ed7af794"
  },
  {
    "url": "typings/callable.html",
    "revision": "b28535c5ba7f07554b8e9f776e282c4e"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "c8ec72cfceca2381ab65436a7ee7f351"
  },
  {
    "url": "typings/enums.html",
    "revision": "78eb5378a0672614772e60b3020cc9df"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "110a4483b32c8d17ce5a52fb600be02e"
  },
  {
    "url": "typings/freshness.html",
    "revision": "234af8f2e6f1c53c6d0d577d64a2a880"
  },
  {
    "url": "typings/functions.html",
    "revision": "86eb56eccae17b60fd9bf75ec9b20dc9"
  },
  {
    "url": "typings/generices.html",
    "revision": "d1faa274d6da85e4f7d83ae5e644c401"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "7554bf21868b15e9b89ff1ca13aab457"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "be9f966b711f9ad3f7c3fdce6ca87f57"
  },
  {
    "url": "typings/lib.html",
    "revision": "2f3e3328bfe557552b14c4e6015ca83a"
  },
  {
    "url": "typings/literals.html",
    "revision": "6153764215387c7ff5b07aef00ca8aef"
  },
  {
    "url": "typings/migrating.html",
    "revision": "82971a8465d84c65a2bc1b25f905127b"
  },
  {
    "url": "typings/mixins.html",
    "revision": "a17d2f383c479eda6daa5e855469649b"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "690b58d206a9a3c2eaff6568510bea9b"
  },
  {
    "url": "typings/neverType.html",
    "revision": "95626a697c760e21aff6e174b200a72b"
  },
  {
    "url": "typings/overview.html",
    "revision": "4457c5476bd24a1660c1875108e11e84"
  },
  {
    "url": "typings/readonly.html",
    "revision": "a187418dc0cbf7e788955007d3588cf7"
  },
  {
    "url": "typings/thisType.html",
    "revision": "5bfd0a9255a9214503b39d25de42e912"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "91fd18c4b3c9ad4745315c7db6787322"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "a5f13ea0ef385f27b30ac4e546881364"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "c48b6cd683c3d9dd6a44f19c71df8aac"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "4b4d69d15de20dfdff7e4490a07d3f3a"
  },
  {
    "url": "typings/types.html",
    "revision": "c4838e7b87ee645ad83497801fe2ad3e"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
