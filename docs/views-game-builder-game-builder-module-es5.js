(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-game-builder-game-builder-module"], {
    /***/
    "0zQy":
    /*!*******************************************************!*\
      !*** ./src/app/shared/enums/file-upload-type.enum.ts ***!
      \*******************************************************/

    /*! exports provided: FileUploadTypeEnum */

    /***/
    function zQy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadTypeEnum", function () {
        return FileUploadTypeEnum;
      });

      var FileUploadTypeEnum;

      (function (FileUploadTypeEnum) {
        FileUploadTypeEnum[FileUploadTypeEnum["AUDIO"] = 0] = "AUDIO";
        FileUploadTypeEnum[FileUploadTypeEnum["IMAGE"] = 1] = "IMAGE";
        FileUploadTypeEnum[FileUploadTypeEnum["JSON"] = 2] = "JSON";
      })(FileUploadTypeEnum || (FileUploadTypeEnum = {}));
      /***/

    },

    /***/
    "1KsR":
    /*!***********************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-values.ts ***!
      \***********************************************************/

    /*! exports provided: GAME_BUILDER_TRANSLATION */

    /***/
    function KsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GAME_BUILDER_TRANSLATION", function () {
        return GAME_BUILDER_TRANSLATION;
      });
      /* harmony import */


      var src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/constants/global.values */
      "nAIU");

      var IMG_FILENAME_SEP = src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_0__["VALUES"].upload.fileNameSeparator;
      var DOWNLOAD_CONFIG_FILE = {
        pt: 'Baixar arquivo',
        en: 'Download game file'
      };
      var GAME_BUILDER_TRANSLATION = {
        pageTitle: {
          gameBuilder: {
            pt: 'Monte o seu jogo',
            en: 'Create your game'
          },
          demoBuilder: {
            pt: 'Jogo Demonstração',
            en: 'Demo Game'
          }
        },
        instruction: {
          pt: 'Preencha o formulário abaixo com as informações para o jogo OU selecione a opção abaixo caso tenha o arquivo do jogo.',
          en: 'Fill out the form below with the game information OR select the option below if you have the game file.'
        },
        uploadConfigFile: {
          checkboxLabel: {
            pt: 'Já tenho arquivo do jogo',
            en: 'I already have the game file'
          },
          instruction: {
            pt: "(gerado ao clicar em \"".concat(DOWNLOAD_CONFIG_FILE.pt, "\" no p\xE9 da p\xE1gina)"),
            en: "(generated by clicking \"".concat(DOWNLOAD_CONFIG_FILE.en, "\" at page bottom)")
          }
        },
        sectionTitle: {
          mainData: {
            pt: 'Dados Principais',
            en: 'Main Data'
          },
          backgroundImg: {
            pt: 'Imagem de Fundo',
            en: 'Background image'
          },
          cards: {
            pt: 'Cartas',
            en: 'Cards'
          },
          cardImages: {
            pt: 'Imagens das Cartas',
            en: 'Card Images'
          }
        },
        gameTitle: {
          demo: {
            pt: 'Jogo da Memória (Demo)',
            en: 'Demo Memory Game'
          }
        },
        input: {
          gameTitle: {
            pt: 'Título do jogo',
            en: 'Game title'
          },
          singleCardPerPair: {
            pt: 'Cada par possui cartas iguais?',
            en: 'Does each pair have the same card?'
          },
          addCustomSoundsPerCard: {
            pt: 'Adicionar sons customizados ao abrir cada carta',
            en: 'Add custom sounds when opening each card'
          },
          numPairs: {
            pt: 'Nº de pares',
            en: 'Number of pairs'
          },
          cardIdType: {
            pt: 'Como identificar as cartas',
            en: 'How to identify the cards'
          },
          backgroundImg: {
            add: {
              pt: 'Inserir imagem de fundo?',
              en: 'Insert background image?'
            },
            url: {
              pt: 'Link da imagem',
              en: 'Image link'
            },
            upload: {
              pt: 'Enviar arquivo',
              en: 'Upload image file'
            }
          },
          cards: {
            pair: {
              pt: 'Par nº ',
              en: 'Pair #'
            },
            getCardPair: function getCardPair(ordinal) {
              return {
                pt: "Carta ".concat(ordinal, " do Par "),
                en: "Card #".concat(ordinal, " of Pair #")
              };
            },
            url: {
              image: {
                pairLink: {
                  pt: 'Link da Imagem do Par ',
                  en: 'Image Link of Pair #'
                },
                getPairLink: function getPairLink(ordinal) {
                  return {
                    pt: "Link da Imagem ".concat(ordinal, " do Par "),
                    en: "Image Link #".concat(ordinal, " of Pair #")
                  };
                }
              },
              audio: {
                pairLink: {
                  pt: 'Link do Áudio do Par ',
                  en: 'Audio Link of Pair #'
                },
                getPairLink: function getPairLink(ordinal) {
                  return {
                    pt: "Link do \xC1udio ".concat(ordinal, " do Par "),
                    en: "Audio Link #".concat(ordinal, " of Pair #")
                  };
                }
              }
            },
            upload: {
              images: {
                pickDirPath: {
                  pt: 'Selecione a pasta que contém as imagens das cartas',
                  en: 'Select the folder containing the card images'
                },
                diffImagesPerPair: {
                  warning: {
                    pt: "Envio de arquivos diferentes por par: os nomes dos arquivos referentes ao mesmo par devem ter o mesmo prefixo seguido de ".concat(IMG_FILENAME_SEP, " . Veja um exemplo "),
                    en: "Sending different files per pair: file names referring to the same pair must have the same prefix followed by ".concat(IMG_FILENAME_SEP, ". See an example ")
                  },
                  warningLink: {
                    pt: 'aqui',
                    en: 'here'
                  }
                }
              },
              audios: {
                pickDirPath: {
                  pt: 'Selecione a pasta que contém os áudios das cartas',
                  en: 'Select the folder containing the card audios'
                },
                instruction: {
                  pt: "O nome de cada arquivo de \xE1udio de cada carta deve ser igual ao nome do arquivo de imagem correspondente. Por exemplo: 'bola.png' e 'bola.mp3'",
                  en: "The name of each audio file for each card must be the same as the name of the corresponding image file. For example: 'ball.png' and 'ball.mp3'"
                }
              }
            }
          }
        },
        btn: {
          submit: {
            createGame: {
              pt: 'Criar jogo',
              en: 'Create game'
            },
            playDemo: {
              pt: 'Jogar',
              en: 'Play'
            }
          },
          download: {
            label: DOWNLOAD_CONFIG_FILE,
            comment: {
              pt: 'Para jogar depois',
              en: 'For play later'
            }
          }
        },
        diffImagesPerPairDialog: {
          title: {
            pt: 'Envio de arquivos diferentes por par',
            en: 'Sending different files per pair'
          },
          instruction: {
            pt: 'Exemplo de nome para arquivos de images para cada par',
            en: 'Example name for image files for each pair'
          },
          pairName: {
            pt: 'nome do par',
            en: 'pair name'
          },
          imageId: {
            pt: 'identificacao da imagem',
            en: 'image identification'
          }
        }
      };
      /***/
    },

    /***/
    "1Mzz":
    /*!*********************************************************!*\
      !*** ./src/app/shared/components/input/input.module.ts ***!
      \*********************************************************/

    /*! exports provided: InputModule */

    /***/
    function Mzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputModule", function () {
        return InputModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _image_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./image/image-preview/image-preview.component */
      "zaHm");
      /* harmony import */


      var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./input-label/input-label.component */
      "UHcN");
      /* harmony import */


      var _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./input-number/input-number.component */
      "uNuV");
      /* harmony import */


      var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./input-text/input-text.component */
      "z1KF");
      /* harmony import */


      var _select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./select/select-media-src-type/select-media-src-type.component */
      "wGwP");
      /* harmony import */


      var _select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./select/select-yes-no/select-yes-no.component */
      "oJA7");
      /* harmony import */


      var _select_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./select/select/select.component */
      "OlXG");
      /* harmony import */


      var _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./upload/upload.component */
      "1mk4");
      /* harmony import */


      var _audio_input_audio_url_input_audio_url_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./audio/input-audio-url/input-audio-url.component */
      "ueZu");
      /* harmony import */


      var _image_input_image_url_input_image_url_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./image/input-image-url/input-image-url.component */
      "S9+U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InputModule = /*#__PURE__*/_createClass(function InputModule() {
        _classCallCheck(this, InputModule);
      });

      InputModule.ɵfac = function InputModule_Factory(t) {
        return new (t || InputModule)();
      };

      InputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: InputModule
      });
      InputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](InputModule, {
          declarations: [_input_label_input_label_component__WEBPACK_IMPORTED_MODULE_5__["InputLabelComponent"], _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__["InputNumberComponent"], _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], _select_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"], _select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_8__["SelectMediaSrcTypeComponent"], _select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_9__["SelectYesNoComponent"], _image_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_4__["ImagePreviewComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"], _audio_input_audio_url_input_audio_url_component__WEBPACK_IMPORTED_MODULE_12__["InputAudioUrlComponent"], _image_input_image_url_input_image_url_component__WEBPACK_IMPORTED_MODULE_13__["InputImageUrlComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_6__["InputNumberComponent"], _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_7__["InputTextComponent"], _select_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"], _select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_8__["SelectMediaSrcTypeComponent"], _select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_9__["SelectYesNoComponent"], _image_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_4__["ImagePreviewComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"], _audio_input_audio_url_input_audio_url_component__WEBPACK_IMPORTED_MODULE_12__["InputAudioUrlComponent"], _image_input_image_url_input_image_url_component__WEBPACK_IMPORTED_MODULE_13__["InputImageUrlComponent"]]
        });
      })();
      /***/

    },

    /***/
    "1mk4":
    /*!********************************************************************!*\
      !*** ./src/app/shared/components/input/upload/upload.component.ts ***!
      \********************************************************************/

    /*! exports provided: UploadComponent */

    /***/
    function mk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
        return UploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/model/file-upload.model */
      "wufY");
      /* harmony import */


      var _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../enums/file-upload-type.enum */
      "0zQy");
      /* harmony import */


      var _abstract_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../abstract-input.component */
      "HgCf");
      /* harmony import */


      var _upload_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./upload-values */
      "n9cC");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "2g2N");
      /* harmony import */


      var _translation_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../translation/translation.service */
      "AgV0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../input-label/input-label.component */
      "UHcN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["uploadInput"];

      function UploadComponent_app_input_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-input-label", 7);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.label)("labelTranslate", ctx_r0.labelTranslate)("comment", ctx_r0.labelComment)("required", ctx_r0.isRequired);
        }
      }

      function UploadComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_div_2_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onSelectFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r1.accept);
        }
      }

      function UploadComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_ng_template_3_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onSelectFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r3.accept)("multiple", ctx_r3.multiple);
        }
      }

      function UploadComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "TRANSLATION", ctx_r4.TRANSLATION.noFileChosen), " ");
        }
      }

      function UploadComponent_ng_template_12_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.singleChosedFileName);
        }
      }

      function UploadComponent_ng_template_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r14.numFiles, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "TRANSLATION", ctx_r14.TRANSLATION.multiple.chosenFilesMsg), " ");
        }
      }

      function UploadComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadComponent_ng_template_12_span_1_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadComponent_ng_template_12_span_2_Template, 3, 5, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r6.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        }
      }

      var UploadComponent = /*#__PURE__*/function (_abstract_input_compo) {
        _inherits(UploadComponent, _abstract_input_compo);

        function UploadComponent(toastService, translationService) {
          var _this;

          _classCallCheck(this, UploadComponent);

          _this = _callSuper(this, UploadComponent);
          _this.toastService = toastService;
          _this.translationService = translationService;
          _this.TRANSLATION = _upload_values__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_TRANSLATION"];
          _this.fileType = _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_2__["FileUploadTypeEnum"].IMAGE;
          _this.multiple = false;
          _this.selectAllDir = false;
          _this.onClearInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this._numFiles = 0;
          return _this;
        }

        _createClass(UploadComponent, [{
          key: "numFiles",
          get: function get() {
            return this._numFiles;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._setAccept();

            this.multiple = this.multiple || this.selectAllDir;
            this.btnTranslation = this.multiple ? this.TRANSLATION.multiple.btn : this.TRANSLATION.nonMultiple.btn;
          }
        }, {
          key: "_setAccept",
          value: function _setAccept() {
            this.accept = _defineProperty(_defineProperty(_defineProperty({}, _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_2__["FileUploadTypeEnum"].AUDIO, 'audio/*'), _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_2__["FileUploadTypeEnum"].IMAGE, 'image/*'), _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_2__["FileUploadTypeEnum"].JSON, 'application/json')[this.fileType];
          }
        }, {
          key: "reset",
          value: function reset() {
            var _a;

            this._fileUploads = [];

            this._clearInput();

            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
            this.singleChosedFileName = null;
          }
        }, {
          key: "_clearInput",
          value: function _clearInput() {
            this._numFiles = 0;
            this._inputElem.nativeElement.value = "";
          }
        }, {
          key: "openInputFile",
          value: function openInputFile() {
            this._inputElem.nativeElement.click();
          }
        }, {
          key: "onSelectFiles",
          value: function onSelectFiles($event) {
            var _this2 = this;

            var _a;

            this._fileUploads = [];
            var fileList = (_a = $event === null || $event === void 0 ? void 0 : $event.target) === null || _a === void 0 ? void 0 : _a.files;

            if (!(fileList === null || fileList === void 0 ? void 0 : fileList.length) || fileList.item(0) == null) {
              this._clearInput();

              this.onClearInput.emit();
              return;
            }

            var _this$_extractFiles = this._extractFiles(fileList),
                files = _this$_extractFiles.files,
                typeOk = _this$_extractFiles.typeOk;

            if (!typeOk) {
              this._clearInput();

              this._showOutAcceptErrorMsg();

              return;
            }

            files.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            }).forEach(function (file) {
              return _this2._readFile(file);
            });
          }
        }, {
          key: "_extractFiles",
          value: function _extractFiles(fileList) {
            var _a;

            this._numFiles = (_a = fileList.length) !== null && _a !== void 0 ? _a : 0;
            var accept = this.accept.replace('*', '');
            var files = [];
            var typeOk = true;
            var i = 0;

            do {
              var file = fileList.item(i++);
              files.push(file);
              typeOk = typeOk && file.type.startsWith(accept);
            } while (typeOk && i < this._numFiles);

            return {
              files: files,
              typeOk: typeOk
            };
          }
        }, {
          key: "_showOutAcceptErrorMsg",
          value: function _showOutAcceptErrorMsg() {
            var translation = this.multiple ? this.TRANSLATION.multiple.acceptErrorMsg : this.TRANSLATION.nonMultiple.acceptErrorMsg;
            var fileTypeTranslation = this.translationService.getTranslation(this.TRANSLATION.fileType[this.fileType]);
            var msg = this.translationService.getTranslation(translation, {
              fileType: fileTypeTranslation
            });
            this.toastService.error(msg, 7000);
          }
        }, {
          key: "_readFile",
          value: function _readFile(file) {
            var _this3 = this;

            var reader = new FileReader();

            reader.onload = function (fileReaderEvent) {
              _this3._fileUploads.push(new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_1__["FileUpload"](fileReaderEvent.target.result, file.name));

              if (_this3._fileUploads.length == _this3._numFiles) {
                _this3._finishReadFiles();
              }
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "_finishReadFiles",
          value: function _finishReadFiles() {
            var _a;

            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this._fileUploads);
            this.singleChosedFileName = this._fileUploads[0].filename;
            this.onUpload.emit(this._fileUploads);
          }
        }]);

        return UploadComponent;
      }(_abstract_input_component__WEBPACK_IMPORTED_MODULE_3__["AbstractInputComponent"]);

      UploadComponent.ɵfac = function UploadComponent_Factory(t) {
        return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translation_translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"]));
      };

      UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UploadComponent,
        selectors: [["app-upload"]],
        viewQuery: function UploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElem = _t.first);
          }
        },
        inputs: {
          fileType: "fileType",
          multiple: "multiple",
          selectAllDir: "selectAllDir"
        },
        outputs: {
          onClearInput: "onClearInput",
          onUpload: "onUpload"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 9,
        consts: [[1, "input-file"], [3, "label", "labelTranslate", "comment", "required", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["regularInput", ""], [1, "d-flex-row"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click"], ["showChosenFiles", ""], [3, "label", "labelTranslate", "comment", "required"], ["type", "file", "hidden", "", "multiple", "", "webkitdirectory", "", 3, "accept", "change"], ["uploadInput", ""], ["type", "file", "hidden", "", 3, "accept", "multiple", "change"], [3, "ngSwitch"], [4, "ngSwitchCase"]],
        template: function UploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadComponent_app_input_label_1_Template, 1, 4, "app-input-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadComponent_div_2_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadComponent_ng_template_3_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_6_listener() {
              return ctx.openInputFile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadComponent_div_11_Template, 3, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UploadComponent_ng_template_12_Template, 3, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label || ctx.labelTranslate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectAllDir)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, "TRANSLATION", ctx.btnTranslation), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numFiles == 0)("ngIfElse", _r5);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_10__["InputLabelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: [".input-file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.d-flex-row[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLmQtZmxleC1yb3cge1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG59XHJcbiJdfQ== */", ".d-flex-col[_ngcontent-%COMP%] {\n  gap: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0oiLCJmaWxlIjoiYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4LWNvbCB7XHJcbiAgICBnYXA6IDByZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "3hcz":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/cards/card-urls/card-pair-url-inputs/card-pair-url-inputs.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: CardPairUrlInputsComponent */

    /***/
    function hcz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardPairUrlInputsComponent", function () {
        return CardPairUrlInputsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../game-builder-values */
      "1KsR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_input_image_input_image_url_input_image_url_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../shared/components/input/image/input-image-url/input-image-url.component */
      "S9+U");
      /* harmony import */


      var _shared_components_input_audio_input_audio_url_input_audio_url_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../shared/components/input/audio/input-audio-url/input-audio-url.component */
      "ueZu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function CardPairUrlInputsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, "TRANSLATION", ctx_r0.TRANSLATION.getCardPair(1)), "", ctx_r0.pairOrdinal, "");
        }
      }

      function CardPairUrlInputsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-input-audio-url", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 3, "TRANSLATION", ctx_r1.firstPairAudioLabelTranslation), "", ctx_r1.pairOrdinal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r1.form);
        }
      }

      function CardPairUrlInputsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, "TRANSLATION", ctx_r2.TRANSLATION.getCardPair(2)), "", ctx_r2.pairOrdinal, "");
        }
      }

      function CardPairUrlInputsComponent_div_11_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-input-audio-url", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 3, "TRANSLATION", ctx_r4.TRANSLATION.url.audio.getPairLink(2)), "", ctx_r4.pairOrdinal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r4.form);
        }
      }

      function CardPairUrlInputsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-input-image-url", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CardPairUrlInputsComponent_div_11_div_4_Template, 3, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, "TRANSLATION", ctx_r3.TRANSLATION.url.image.getPairLink(2)), "", ctx_r3.pairOrdinal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.urlPairConfig.addCustomAudioPerPair);
        }
      }

      var CardPairUrlInputsComponent = /*#__PURE__*/function () {
        function CardPairUrlInputsComponent(fb) {
          _classCallCheck(this, CardPairUrlInputsComponent);

          this.fb = fb;
          this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_1__["GAME_BUILDER_TRANSLATION"].input.cards;
        }

        _createClass(CardPairUrlInputsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pairOrdinal = this.index + 1;

            this._initForm();
          }
        }, {
          key: "_initForm",
          value: function _initForm() {
            this.form = this.fb.group({
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            });

            this._resetControls();

            this.parent.addSubForm(this.form);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.urlPairConfig && !changes.urlPairConfig.firstChange) {
              this._resetControls();
            }
          }
        }, {
          key: "_resetControls",
          value: function _resetControls() {
            if (this.urlPairConfig.addCustomAudioPerPair) {
              this._addAudioControl();
            } else {
              this.form.removeControl('audio');
            }

            if (this.urlPairConfig.singleCardPerPair) {
              this.form.removeControl('image2');
              this.form.removeControl('audio2');
            } else {
              this.form.addControl('image2', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));

              if (this.urlPairConfig.addCustomAudioPerPair) {
                this.form.addControl('audio2', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
              }
            }
          }
        }, {
          key: "_addAudioControl",
          value: function _addAudioControl() {
            this.form.addControl('audio', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
          }
        }, {
          key: "firstPairImageLabelTranslation",
          get: function get() {
            var _a;

            return ((_a = this.urlPairConfig) === null || _a === void 0 ? void 0 : _a.singleCardPerPair) ? this.TRANSLATION.url.image.pairLink : this.TRANSLATION.url.image.getPairLink(1);
          }
        }, {
          key: "firstPairAudioLabelTranslation",
          get: function get() {
            var _a;

            return ((_a = this.urlPairConfig) === null || _a === void 0 ? void 0 : _a.singleCardPerPair) ? this.TRANSLATION.url.audio.pairLink : this.TRANSLATION.url.audio.getPairLink(1);
          }
        }, {
          key: "onInsertUrl",
          value: function onInsertUrl($url) {
            this.parent.onInsertUrl($url, this.index);
          }
        }, {
          key: "deleteImgUrl",
          value: function deleteImgUrl() {
            this.parent.deleteUrl(this.index);
          }
        }]);

        return CardPairUrlInputsComponent;
      }();

      CardPairUrlInputsComponent.ɵfac = function CardPairUrlInputsComponent_Factory(t) {
        return new (t || CardPairUrlInputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      CardPairUrlInputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CardPairUrlInputsComponent,
        selectors: [["app-card-pair-url-inputs"]],
        inputs: {
          parent: "parent",
          index: "index",
          urlPairConfig: "urlPairConfig"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 15,
        consts: [[1, "d-flex-col"], [1, "mt-2", "fst-italic", "fw-bold"], [4, "ngIf"], [1, "d-flex-row"], [1, "form-item"], ["controlName", "image", 3, "label", "form"], ["class", "form-item", 4, "ngIf"], ["class", "d-flex-row", 4, "ngIf"], [1, "mt-2", "fst-italic"], ["controlName", "audio", 3, "label", "form"], ["controlName", "image2", 3, "label", "form"], ["controlName", "audio2", 3, "label", "form"]],
        template: function CardPairUrlInputsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CardPairUrlInputsComponent_div_4_Template, 4, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-input-image-url", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CardPairUrlInputsComponent_div_9_Template, 3, 6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CardPairUrlInputsComponent_div_10_Template, 4, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CardPairUrlInputsComponent_div_11_Template, 5, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 9, "TRANSLATION", ctx.TRANSLATION.pair), "", ctx.pairOrdinal, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.urlPairConfig == null ? null : ctx.urlPairConfig.singleCardPerPair));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 12, "TRANSLATION", ctx.firstPairImageLabelTranslation), "", ctx.pairOrdinal, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.urlPairConfig == null ? null : ctx.urlPairConfig.addCustomAudioPerPair);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.urlPairConfig == null ? null : ctx.urlPairConfig.singleCardPerPair));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.urlPairConfig == null ? null : ctx.urlPairConfig.singleCardPerPair));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_input_image_input_image_url_input_image_url_component__WEBPACK_IMPORTED_MODULE_4__["InputImageUrlComponent"], _shared_components_input_audio_input_audio_url_input_audio_url_component__WEBPACK_IMPORTED_MODULE_5__["InputAudioUrlComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "4ECR":
    /*!*************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/game-builder-form.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: GameBuilderFormComponent */

    /***/
    function ECR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameBuilderFormComponent", function () {
        return GameBuilderFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/enums/card-id-type.enum */
      "YzOW");
      /* harmony import */


      var src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/enums/media-src-type.enum */
      "BUnV");
      /* harmony import */


      var src_app_shared_model_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/model/card */
      "M6cH");
      /* harmony import */


      var src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/model/file-upload.model */
      "wufY");
      /* harmony import */


      var src_app_shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/model/game-config.model */
      "2w9t");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../game-builder-values */
      "1KsR");
      /* harmony import */


      var _game_build_form_input_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./game-build-form-input.values */
      "T3tV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/game.service */
      "VdwR");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "2g2N");
      /* harmony import */


      var src_app_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/components/translation/translation.service */
      "AgV0");

      function GameBuilderFormComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-select-yes-no", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 12, "TRANSLATION", ctx_r0.TRANSLATION.input.cardIdType));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("form", ctx_r0.form)("controlName", ctx_r0.FORM_INPUT.cardIdType)("optionsTranslate", ctx_r0.options.cardId);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelTranslate", ctx_r0.TRANSLATION.input.singleCardPerPair)("form", ctx_r0.form)("controlName", ctx_r0.FORM_INPUT.card.singleCardPerPair);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelTranslate", ctx_r0.TRANSLATION.input.numPairs)("form", ctx_r0.form)("controlName", ctx_r0.FORM_INPUT.card.numPairs)("options", ctx_r0.options.numPairs);
        }
      }

      function GameBuilderFormComponent_ng_template_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-background-image-form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("form", ctx_r4.form)("controlName", ctx_r4.FORM_INPUT.backgroundImgSrc);
        }
      }

      function GameBuilderFormComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-input-text", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-select-yes-no", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onChange", function GameBuilderFormComponent_ng_template_1_Template_app_select_yes_no_onChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r5.onChangeAddBackgroundImg($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, GameBuilderFormComponent_ng_template_1_div_13_Template, 2, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-card-form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 15, "TRANSLATION", ctx_r2.TRANSLATION.sectionTitle.mainData), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelTranslate", ctx_r2.TRANSLATION.input.gameTitle)("form", ctx_r2.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelTranslate", ctx_r2.TRANSLATION.input.cardIdType)("form", ctx_r2.form)("controlName", ctx_r2.FORM_INPUT.cardIdType)("optionsTranslate", ctx_r2.options.cardId);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 18, "TRANSLATION", ctx_r2.TRANSLATION.sectionTitle.backgroundImg));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("labelTranslate", ctx_r2.TRANSLATION.input.backgroundImg.add)("form", ctx_r2.form)("controlName", ctx_r2.FORM_INPUT.addBackgroundImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.flag.addBackgroundImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](17, 21, "TRANSLATION", ctx_r2.TRANSLATION.sectionTitle.cards));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parent", ctx_r2);
        }
      }

      function GameBuilderFormComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameBuilderFormComponent_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r7.download();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "download");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, "TRANSLATION", ctx_r3.TRANSLATION.btn.download.label), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 5, "TRANSLATION", ctx_r3.TRANSLATION.btn.download.comment));
        }
      }

      var GameBuilderFormComponent = /*#__PURE__*/function () {
        function GameBuilderFormComponent(fb, gameService, toastService, translationService) {
          _classCallCheck(this, GameBuilderFormComponent);

          this.fb = fb;
          this.gameService = gameService;
          this.toastService = toastService;
          this.translationService = translationService;
          this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_6__["GAME_BUILDER_TRANSLATION"];
          this.FORM_INPUT = _game_build_form_input_values__WEBPACK_IMPORTED_MODULE_7__["GAME_BUILDER_FORM_INPUT"];
          this.ACCEPT_IMG = ['image/png', 'image/jpeg'];
          this.options = {};
          this.flag = {};
          this.submitBtnTranslation = {};
        }

        _createClass(GameBuilderFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.flag = {
              isDemo: this._isDemo
            };

            this._initForm();

            this._setOptions();

            this._setSubmitBtn();
          }
        }, {
          key: "_isDemo",
          get: function get() {
            return this.parent.isDemo;
          }
        }, {
          key: "_initForm",
          value: function _initForm() {
            this.form = this.fb.group(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Memory Game', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            }, this.FORM_INPUT.cardIdType, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].NUMBERS, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)), this.FORM_INPUT.addBackgroundImg, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)), this.FORM_INPUT.backgroundImgSrc, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)), this.FORM_INPUT.card.singleCardPerPair, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)), this.FORM_INPUT.card.addCustomSoundsPerCard, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)), this.FORM_INPUT.card.cardSrcType, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)));

            if (this._isDemo) {
              this.form.addControl(this.FORM_INPUT.card.numPairs, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
              this.form.removeControl(this.FORM_INPUT.addBackgroundImg);
              this.form.removeControl(this.FORM_INPUT.backgroundImgSrc);
              this.form.removeControl(this.FORM_INPUT.card.addCustomSoundsPerCard);
              this.form.removeControl(this.FORM_INPUT.card.cardSrcType);
            }
          }
        }, {
          key: "_setOptions",
          value: function _setOptions() {
            var _this4 = this;

            var cardIdTypeNameTranslations = src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeNameTranslations"];
            this.options = {
              cardId: [{
                id: src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].NUMBERS,
                label: cardIdTypeNameTranslations[src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].NUMBERS]
              }, {
                id: src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].ROW_COLUMN,
                label: cardIdTypeNameTranslations[src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].ROW_COLUMN]
              }, {
                id: src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].ICONS,
                label: cardIdTypeNameTranslations[src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].ICONS]
              }]
            };

            if (this._isDemo) {
              this.options.numPairs = [];
              [4, 6, 8, 10].forEach(function (value) {
                return _this4.options.numPairs.push({
                  id: value,
                  label: value
                });
              });
            }
          }
        }, {
          key: "_setSubmitBtn",
          value: function _setSubmitBtn() {
            this.submitBtnTranslation = this._isDemo ? this.TRANSLATION.btn.submit.playDemo : this.TRANSLATION.btn.submit.createGame;
          }
        }, {
          key: "onChangeAddBackgroundImg",
          value: function onChangeAddBackgroundImg($value) {
            this.flag.addBackgroundImg = $value;
            this.form.get(this.FORM_INPUT.backgroundImgSrc).setValue(null);
          }
        }, {
          key: "download",
          value: function download() {
            if (this._isDemo) {
              return;
            }

            if (this._isInvalidForm) {
              return this.toastService.showInvalidFormError();
            }

            this.gameService.downloadGameConfig(this._buildGameConfig());
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this._isInvalidForm) {
              return this.toastService.showInvalidFormError();
            }

            if (this._isDemo) {
              this.gameService.create(this._buildGameConfigForDemo());
              return;
            }

            this.gameService.create(this._buildGameConfig());
          }
        }, {
          key: "_isInvalidForm",
          get: function get() {
            this.form.markAllAsTouched();
            return this.form.invalid;
          }
        }, {
          key: "_buildGameConfig",
          value: function _buildGameConfig() {
            var data = Object.assign({}, this.form.value);
            var gameConfig = new src_app_shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_5__["GameConfig"]();
            gameConfig.title = data.title.toUpperCase();
            gameConfig.singleCardPerPair = data.singleCardPerPair;
            gameConfig.addCustomSoundsPerCard = data.addCustomSoundsPerCard;
            gameConfig.cardIdType = data.cardIdType;
            gameConfig.backgroundImgSrc = data.backgroundImgSrc;
            var srcType = data[this.FORM_INPUT.card.cardSrcType];
            gameConfig.cards = srcType == src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_2__["MediaSourceTypeEnum"].UPLOAD ? this._getCardsFromUploads(data) : this._getCardsFromUrls(data);
            return gameConfig;
          }
        }, {
          key: "_getCardsFromUploads",
          value: function _getCardsFromUploads(formValue) {
            var images = formValue[this.FORM_INPUT.card.upload.images];
            var audios = formValue[this.FORM_INPUT.card.upload.audios];
            return this.gameService.buildCardsFromValidUploads(images, audios);
          }
        }, {
          key: "_getCardsFromUrls",
          value: function _getCardsFromUrls(formValue) {
            var cardUrls = formValue[this.FORM_INPUT.card.urls];
            var index = 1;
            var singleCardPerPair = formValue[this.FORM_INPUT.card.singleCardPerPair];

            if (singleCardPerPair) {
              return cardUrls.map(function (obj) {
                var image = new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](obj.image, "imageUrl".concat(index));
                var audio = obj.audio ? new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](obj.audio, "audioUrl".concat(index)) : null;
                index++;
                return new src_app_shared_model_card__WEBPACK_IMPORTED_MODULE_3__["Card"](null, image, audio);
              });
            }

            var cards = [];
            cardUrls.forEach(function (obj) {
              var image = new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](obj.image, "imageUrl".concat(index, "_card1"));
              var audio = obj.audio ? new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](obj.audio, "audioUrl".concat(index, "_card1")) : null;
              cards.push(new src_app_shared_model_card__WEBPACK_IMPORTED_MODULE_3__["Card"](null, image, audio));
              var image2 = new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](obj.image2, "imageUrl".concat(index, "_card2"));
              var audio2 = obj.audio ? new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](obj.audio2, "audioUrl".concat(index, "_card2")) : null;
              cards.push(new src_app_shared_model_card__WEBPACK_IMPORTED_MODULE_3__["Card"](null, image2, audio2));
              index++;
            });
            return cards;
          }
        }, {
          key: "_buildGameConfigForDemo",
          value: function _buildGameConfigForDemo() {
            var data = this.form.value;
            var gameConfig = new src_app_shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_5__["GameConfig"]();
            gameConfig.title = this.translationService.getTranslation(this.TRANSLATION.gameTitle.demo);
            gameConfig.singleCardPerPair = data[this.FORM_INPUT.card.singleCardPerPair];
            gameConfig.addCustomSoundsPerCard = false;
            gameConfig.cards = [];
            var imageDirPath = 'assets/images/demo-game-cards';
            var numPairs = data.numPairs;

            for (var i = 1; i <= numPairs; i++) {
              var filename = "num".concat(i, "_draw.png");
              var image = new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"]("".concat(imageDirPath, "/draw/").concat(filename), filename);
              gameConfig.cards.push(new src_app_shared_model_card__WEBPACK_IMPORTED_MODULE_3__["Card"](null, image, null));
            }

            if (!gameConfig.singleCardPerPair) {
              for (var _i = 1; _i <= numPairs; _i++) {
                var _filename = "num".concat(_i, "_word.png");

                var _image = new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_4__["FileUpload"]("".concat(imageDirPath, "/words/").concat(_filename), _filename);

                gameConfig.cards.push(new src_app_shared_model_card__WEBPACK_IMPORTED_MODULE_3__["Card"](null, _image, null));
              }
            }

            return gameConfig;
          }
        }]);

        return GameBuilderFormComponent;
      }();

      GameBuilderFormComponent.ɵfac = function GameBuilderFormComponent_Factory(t) {
        return new (t || GameBuilderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"]));
      };

      GameBuilderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: GameBuilderFormComponent,
        selectors: [["app-game-builder-form"]],
        inputs: {
          parent: "parent"
        },
        decls: 11,
        vars: 7,
        consts: [[4, "ngIf", "ngIfElse"], ["showFullBuilderForm", ""], [1, "d-flex-row", "mt-4"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "click"], ["class", "download-btn", 4, "ngIf"], [3, "formGroup"], [1, "form-line"], [1, "form-item", 3, "label", "form", "controlName", "optionsTranslate"], [1, "form-item", 3, "labelTranslate", "form", "controlName"], [1, "form-item", 3, "labelTranslate", "form", "controlName", "options"], [1, "subtitle", "color-primary"], ["controlName", "title", 1, "input-title", 3, "labelTranslate", "form"], [1, "input-card-id", 3, "labelTranslate", "form", "controlName", "optionsTranslate"], [3, "labelTranslate", "form", "controlName", "onChange"], ["class", "form-item", 4, "ngIf"], [3, "parent"], [1, "form-item"], [3, "form", "controlName"], [1, "download-btn"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"]],
        template: function GameBuilderFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, GameBuilderFormComponent_div_0_Template, 7, 15, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GameBuilderFormComponent_ng_template_1_Template, 19, 24, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function GameBuilderFormComponent_Template_button_click_5_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "sports_esports");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, GameBuilderFormComponent_div_10_Template, 9, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flag.isDemo)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 4, "TRANSLATION", ctx.submitBtnTranslation), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.flag.isDemo);
          }
        },
        styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.input-title[_ngcontent-%COMP%] {\n  flex: 8 0 0;\n}\n\n.input-card-id[_ngcontent-%COMP%] {\n  flex: 4 0 0;\n}\n\n.input-file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.d-flex-row[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.download-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2FtZS1idWlsZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBRVIiLCJmaWxlIjoiZ2FtZS1idWlsZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtdGl0bGUge1xyXG4gICAgZmxleDogOCAwIDA7XHJcbn1cclxuLmlucHV0LWNhcmQtaWQge1xyXG4gICAgZmxleDogNCAwIDA7XHJcbn1cclxuXHJcbi5pbnB1dC1maWxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5kLWZsZXgtcm93IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "BUnV":
    /*!*****************************************************!*\
      !*** ./src/app/shared/enums/media-src-type.enum.ts ***!
      \*****************************************************/

    /*! exports provided: MediaSourceTypeEnum */

    /***/
    function BUnV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaSourceTypeEnum", function () {
        return MediaSourceTypeEnum;
      });

      var MediaSourceTypeEnum;

      (function (MediaSourceTypeEnum) {
        MediaSourceTypeEnum[MediaSourceTypeEnum["UPLOAD"] = 1] = "UPLOAD";
        MediaSourceTypeEnum[MediaSourceTypeEnum["URL"] = 2] = "URL";
      })(MediaSourceTypeEnum || (MediaSourceTypeEnum = {}));
      /***/

    },

    /***/
    "HgCf":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/components/input/abstract-input.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AbstractInputComponent */

    /***/
    function HgCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractInputComponent", function () {
        return AbstractInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AbstractInputComponent = /*#__PURE__*/function () {
        function AbstractInputComponent() {
          _classCallCheck(this, AbstractInputComponent);

          this.flexDirectionRow = false;
          this.disabled = false;
          this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(AbstractInputComponent, [{
          key: "_setOriginalRequired",
          value: function _setOriginalRequired() {
            this._originalRequired = this.isRequired;
          }
        }, {
          key: "checkForm",
          value: function checkForm() {
            if (!this.form) {
              this.controlName = 'model';
              this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                model: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
              });
            }
          }
        }, {
          key: "formControl",
          get: function get() {
            var _a;

            return (_a = this.form) === null || _a === void 0 ? void 0 : _a.controls[this.controlName];
          }
        }, {
          key: "isRequired",
          get: function get() {
            var _a;

            return ((_a = this.formControl) === null || _a === void 0 ? void 0 : _a.hasError('required')) || false;
          }
        }, {
          key: "isInvalid",
          get: function get() {
            return this.hasError('invalid');
          }
        }, {
          key: "hasError",
          value: function hasError(errorKey) {
            var formControl = this.formControl;
            return !this.isRequired && ((formControl === null || formControl === void 0 ? void 0 : formControl.invalid) || (formControl === null || formControl === void 0 ? void 0 : formControl.hasError(errorKey)));
          }
        }, {
          key: "inputClass",
          get: function get() {
            return {
              'd-flex-row': this.flexDirectionRow,
              'd-flex-col': !this.flexDirectionRow
            };
          }
        }, {
          key: "getSelectValue",
          get: function get() {
            try {
              return this.formControl.value;
            } catch (error) {
              return null;
            }
          }
        }, {
          key: "_setAsInvalid",
          value: function _setAsInvalid() {
            var control = this.formControl;
            control.setErrors({
              'invalid': true
            });
            control.markAsTouched();
          }
        }, {
          key: "_setAsValidByOriginalRequired",
          value: function _setAsValidByOriginalRequired() {
            var control = this.formControl;
            control.setErrors(this._originalRequired ? {
              'required': true
            } : null);
            control.markAsTouched();
          }
        }]);

        return AbstractInputComponent;
      }();

      AbstractInputComponent.ɵfac = function AbstractInputComponent_Factory(t) {
        return new (t || AbstractInputComponent)();
      };

      AbstractInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AbstractInputComponent,
        selectors: [["app-abstract-input"]],
        inputs: {
          labelTranslate: "labelTranslate",
          label: "label",
          labelComment: "labelComment",
          form: "form",
          controlName: "controlName",
          flexDirectionRow: "flexDirectionRow",
          disabled: "disabled"
        },
        outputs: {
          onChange: "onChange"
        },
        decls: 0,
        vars: 0,
        template: function AbstractInputComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ImFY":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/cards/card-image-filename-example-dialog/card-image-filename-example-dialog.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: CardImageFilenameExampleDialogComponent */

    /***/
    function ImFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardImageFilenameExampleDialogComponent", function () {
        return CardImageFilenameExampleDialogComponent;
      });
      /* harmony import */


      var src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/constants/global.values */
      "nAIU");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../game-builder-values */
      "1KsR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var CardImageFilenameExampleDialogComponent = /*#__PURE__*/_createClass(function CardImageFilenameExampleDialogComponent() {
        _classCallCheck(this, CardImageFilenameExampleDialogComponent);

        this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_1__["GAME_BUILDER_TRANSLATION"].diffImagesPerPairDialog;
        this.SEP = src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_0__["VALUES"].upload.fileNameSeparator;
      });

      CardImageFilenameExampleDialogComponent.ɵfac = function CardImageFilenameExampleDialogComponent_Factory(t) {
        return new (t || CardImageFilenameExampleDialogComponent)();
      };

      CardImageFilenameExampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CardImageFilenameExampleDialogComponent,
        selectors: [["app-card-image-filename-example-dialog"]],
        decls: 22,
        vars: 20,
        consts: [[1, "dialog-header"], ["mat-dialog-title", ""], ["mat-icon-button", "", "mat-dialog-close", "", "id", "modal-close-btn", 3, "matTooltip"], ["mat-dialog-content", ""], [1, "image-cont"], ["src", "assets/images/upload_diff_images_per_pair_example.png", "alt", "Image"]],
        template: function CardImageFilenameExampleDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 6, "TRANSLATION", ctx.TRANSLATION.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, "CLOSE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 11, "TRANSLATION", ctx.TRANSLATION.instruction), ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("[", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 14, "TRANSLATION", ctx.TRANSLATION.pairName), "]");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.SEP, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("[", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 17, "TRANSLATION", ctx.TRANSLATION.imageId), "]");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".mat-dialog-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%]   .image-cont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjYXJkLWltYWdlLWZpbGVuYW1lLWV4YW1wbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNSOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBQVIiLCJmaWxlIjoiY2FyZC1pbWFnZS1maWxlbmFtZS1leGFtcGxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgLmltYWdlLWNvbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Lpt5":
    /*!***************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder/game-builder.component.ts ***!
      \***************************************************************************/

    /*! exports provided: GameBuilderComponent */

    /***/
    function Lpt5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameBuilderComponent", function () {
        return GameBuilderComponent;
      });
      /* harmony import */


      var src_app_shared_enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/enums/file-upload-type.enum */
      "0zQy");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../game-builder-values */
      "1KsR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/game.service */
      "VdwR");

      function GameBuilderComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function GameBuilderComponent_div_7_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.onChangeUploadConfigFile($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, "TRANSLATION", ctx_r0.TRANSLATION.uploadConfigFile.checkboxLabel), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 5, "TRANSLATION", ctx_r0.TRANSLATION.uploadConfigFile.instruction), " ");
        }
      }

      function GameBuilderComponent_app_game_builder_form_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-game-builder-form", 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("parent", ctx_r1);
        }
      }

      function GameBuilderComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-upload", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onUpload", function GameBuilderComponent_div_9_Template_app_upload_onUpload_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.onUploadConfigFile($event, _r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fileType", ctx_r2.CONFIG_FILE_TYPE);
        }
      }

      var GameBuilderComponent = /*#__PURE__*/function () {
        function GameBuilderComponent(route, gameService) {
          _classCallCheck(this, GameBuilderComponent);

          this.route = route;
          this.gameService = gameService;
          this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_1__["GAME_BUILDER_TRANSLATION"];
          this.CONFIG_FILE_TYPE = src_app_shared_enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_0__["FileUploadTypeEnum"].JSON;
          this.pageTitleTranslation = {};
          this.flag = {};
        }

        _createClass(GameBuilderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var _a;

            (_a = this.route.data) === null || _a === void 0 ? void 0 : _a.subscribe(function (data) {
              var _a;

              _this5._isDemo = (_a = data.demo) !== null && _a !== void 0 ? _a : false;
              _this5.pageTitleTranslation = _this5._isDemo ? _this5.TRANSLATION.pageTitle.demoBuilder : _this5.TRANSLATION.pageTitle.gameBuilder;

              _this5._initFlags();
            });
          }
        }, {
          key: "_initFlags",
          value: function _initFlags() {
            this.flag = {
              isDemo: this._isDemo,
              uploadConfigFile: false,
              showForm: true
            };
          }
        }, {
          key: "isDemo",
          get: function get() {
            return this._isDemo;
          }
        }, {
          key: "onChangeUploadConfigFile",
          value: function onChangeUploadConfigFile($doUpload) {
            this.flag.uploadConfigFile = $doUpload;
            this.flag.showForm = !$doUpload;
          }
        }, {
          key: "onUploadConfigFile",
          value: function onUploadConfigFile(uploadFiles, uploadChild) {
            try {
              this.gameService.createGameFromUploadedConfigFile(uploadFiles[0]);
            } catch (error) {
              uploadChild.reset();
            }
          }
        }]);

        return GameBuilderComponent;
      }();

      GameBuilderComponent.ɵfac = function GameBuilderComponent_Factory(t) {
        return new (t || GameBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]));
      };

      GameBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: GameBuilderComponent,
        selectors: [["app-game-builder"]],
        decls: 10,
        vars: 11,
        consts: [[1, "color-primary"], [1, "main-instructions", "mb-4"], ["class", "upload-config-file", 4, "ngIf"], [3, "parent", 4, "ngIf"], [4, "ngIf"], [1, "upload-config-file"], ["color", "primary", 3, "change"], [1, "instruction"], [3, "parent"], [3, "fileType", "onUpload"], ["upload", ""]],
        template: function GameBuilderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, GameBuilderComponent_div_7_Template, 7, 8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, GameBuilderComponent_app_game_builder_form_8_Template, 1, 1, "app-game-builder-form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, GameBuilderComponent_div_9_Template, 3, 1, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 5, "TRANSLATION", ctx.pageTitleTranslation));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 8, "TRANSLATION", ctx.TRANSLATION.instruction));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.flag.isDemo);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flag.showForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flag.uploadConfigFile);
          }
        },
        styles: ["h1[_ngcontent-%COMP%] {\n  font-family: Quicksand !important;\n}\n\n.main-instructions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.upload-config-file[_ngcontent-%COMP%] {\n  margin-left: 3rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.upload-config-file[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: gray;\n}\n\n@media screen and (max-width: 500px) {\n  .upload-config-file[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n  }\n}\n\n@media screen and (max-width: 300px) {\n  .upload-config-file[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2FtZS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDUjs7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxjQUFBO0VBQ047QUFDRiIsImZpbGUiOiJnYW1lLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLWluc3RydWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnVwbG9hZC1jb25maWctZmlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5pbnN0cnVjdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAudXBsb2FkLWNvbmZpZy1maWxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLnVwbG9hZC1jb25maWctZmlsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "M3mD":
    /*!*********************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/cards/card-urls/card-urls.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CardUrlsInputComponent */

    /***/
    function M3mD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardUrlsInputComponent", function () {
        return CardUrlsInputComponent;
      });
      /* harmony import */


      var src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/model/file-upload.model */
      "wufY");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../game-builder-values */
      "1KsR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CardUrlsInputComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-card-pair-url-inputs", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("parent", ctx_r1)("index", i_r2)("urlPairConfig", ctx_r1.urlPairConfig);
        }
      }

      var _c0 = function _c0() {
        return [];
      };

      function CardUrlsInputComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CardUrlsInputComponent_div_0_div_1_Template, 2, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.indices || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var CardUrlsInputComponent = /*#__PURE__*/function () {
        function CardUrlsInputComponent(fb) {
          _classCallCheck(this, CardUrlsInputComponent);

          this.fb = fb;
          this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_1__["GAME_BUILDER_TRANSLATION"].input.cards;
          this._CARD_URLS_INPUT = 'cardUrls';
          this._cardImageMap = {}; // define hear to avoid ExpressionChangedAfterItHasBeenCheckedError

          this.indices = _toConsumableArray(Array(2).keys());
          this._formArray = fb.array([]);
        }

        _createClass(CardUrlsInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            setTimeout(function () {
              _this6.indices = _toConsumableArray(Array(_this6.urlPairConfig.numPairs).keys());
              _this6._cardImageMap = {};
              _this6._numCardImages = _this6.urlPairConfig.numCards;

              _this6.form.addControl(_this6._CARD_URLS_INPUT, _this6._formArray);
            }, 1);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.form.removeControl(this._CARD_URLS_INPUT);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.urlPairConfig && !changes.urlPairConfig.firstChange) {
              this.ngOnInit();
            }
          }
        }, {
          key: "addSubForm",
          value: function addSubForm(subForm) {
            this._formArray.push(subForm);
          }
        }, {
          key: "getSubForm",
          value: function getSubForm(index) {
            var _a;

            return (_a = this._formArray) === null || _a === void 0 ? void 0 : _a.controls[index];
          }
        }, {
          key: "getUrl",
          value: function getUrl(pairIndex) {
            var imageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var _a;

            try {
              return (_a = this._cardImageMap[this._buildCardImageKey(pairIndex, imageIndex)]) === null || _a === void 0 ? void 0 : _a.src;
            } catch (error) {
              return null;
            }
          }
        }, {
          key: "_buildCardImageKey",
          value: function _buildCardImageKey(pairIndex, imageIndex) {
            return "".concat(pairIndex).concat(imageIndex);
          }
        }, {
          key: "onInsertUrl",
          value: function onInsertUrl($url, pairIndex) {
            var imageIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var key = this._buildCardImageKey(pairIndex, imageIndex);

            this._cardImageMap[key] = new src_app_shared_model_file_upload_model__WEBPACK_IMPORTED_MODULE_0__["FileUpload"]($url, "pair".concat(pairIndex + 1, "_image").concat(imageIndex + 1));

            this._updateFormControl();
          }
        }, {
          key: "deleteUrl",
          value: function deleteUrl(pairIndex) {
            var imageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var sumControlName = 'url';

            if (imageIndex == 1) {
              sumControlName = 'url2';
            }

            this.getSubForm(pairIndex).get(sumControlName).reset();

            var cardImageKey = this._buildCardImageKey(pairIndex, imageIndex);

            delete this._cardImageMap[cardImageKey];

            this._updateFormControl();
          }
        }, {
          key: "_updateFormControl",
          value: function _updateFormControl() {
            var cardImages = Object.values(this._cardImageMap);

            if (cardImages.length === this._numCardImages) {
              this.form.get(this.controlName).setValue(cardImages);
              return;
            }

            this.form.get(this.controlName).setValue(null);
          }
        }]);

        return CardUrlsInputComponent;
      }();

      CardUrlsInputComponent.ɵfac = function CardUrlsInputComponent_Factory(t) {
        return new (t || CardUrlsInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      CardUrlsInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CardUrlsInputComponent,
        selectors: [["app-card-urls"]],
        inputs: {
          form: "form",
          controlName: "controlName",
          urlPairConfig: "urlPairConfig"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["class", "card-box", 4, "ngFor", "ngForOf"], [1, "card-box"], [3, "parent", "index", "urlPairConfig"]],
        template: function CardUrlsInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CardUrlsInputComponent_div_0_Template, 2, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.indices);
          }
        },
        styles: [".card-box[_ngcontent-%COMP%] {\n  border: 1px dotted steelblue;\n  border-radius: 4px;\n  padding: 0 1rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjYXJkLXVybHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY2FyZC11cmxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm94IHtcclxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBzdGVlbGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "OlXG":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/components/input/select/select/select.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SelectComponent */

    /***/
    function OlXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
        return SelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../abstract-input.component */
      "HgCf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../input-label/input-label.component */
      "UHcN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["allOption"];

      function SelectComponent_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.ALL_OPTION);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.allOptionLabel, " ");
        }
      }

      function SelectComponent_div_5_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r7.getOptionValue(option_r8))("disabled", ctx_r7.multiple && ctx_r7.allOptionSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, "TRANSLATION", option_r8[ctx_r7.labelAttribute]), " ");
        }
      }

      function SelectComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_div_5_mat_option_1_Template, 3, 6, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.optionsTranslate);
        }
      }

      function SelectComponent_ng_template_6_mat_option_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r10 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.getOptionValue(option_r10))("disabled", ctx_r9.multiple && ctx_r9.allOptionSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r10[ctx_r9.labelAttribute], " ");
        }
      }

      function SelectComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectComponent_ng_template_6_mat_option_0_Template, 2, 3, "mat-option", 11);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.options);
        }
      }

      function SelectComponent_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "FORM_INPUT.REQUIRED"));
        }
      }

      function SelectComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Erro ao buscar op\xE7\xF5es para ", ctx_r5.label, "\n");
        }
      }

      var SelectComponent = /*#__PURE__*/function (_abstract_input_compo2) {
        _inherits(SelectComponent, _abstract_input_compo2);

        function SelectComponent() {
          var _this7;

          _classCallCheck(this, SelectComponent);

          _this7 = _callSuper(this, SelectComponent, arguments);
          _this7.ALL_OPTION = 'all';
          _this7.options = [];
          _this7.optionsTranslate = [];
          _this7.valueAttribute = 'id';
          _this7.labelAttribute = 'label';
          _this7.multiple = false;
          _this7.useFullOptionAsValue = false;
          _this7.onFinishedLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this7.showLoadingOptionsError = false;
          _this7._allSelected = false;
          return _this7;
        }

        _createClass(SelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showLoadingOptionsError = false;
            this.checkForm();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.options && changes.options.currentValue == null) {
              this.showLoadingOptionsError = true;
            }
          }
        }, {
          key: "getOptionValue",
          value: function getOptionValue(option) {
            if (this.useFullOptionAsValue) {
              return option;
            }

            return option[this.valueAttribute];
          }
        }, {
          key: "onChangeSelection",
          value: function onChangeSelection($eventValue) {
            if (this.allOptionLabel && this.multiple) {
              this._onChangeSelectionMultiple($eventValue);
            }

            this.onChange.emit($eventValue);
          }
        }, {
          key: "_onChangeSelectionMultiple",
          value: function _onChangeSelectionMultiple($eventValue) {
            var _this8 = this;

            if (this._allSelected) {
              this.formControl.setValue([]);
              this._allSelected = false;
              return;
            }

            this._allSelected = $eventValue.includes(this.ALL_OPTION) || $eventValue.length == this.options.length;

            if (this._allSelected) {
              this.formControl.setValue(this.options.map(function (option) {
                return option[_this8.valueAttribute];
              }));
            }
          }
        }, {
          key: "allOptionSelected",
          get: function get() {
            var _a;

            return ((_a = this._allOption) === null || _a === void 0 ? void 0 : _a.selected) || false;
          }
        }]);

        return SelectComponent;
      }(_abstract_input_component__WEBPACK_IMPORTED_MODULE_1__["AbstractInputComponent"]);

      SelectComponent.ɵfac = function SelectComponent_Factory(t) {
        return ɵSelectComponent_BaseFactory(t || SelectComponent);
      };

      SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectComponent,
        selectors: [["app-select"]],
        viewQuery: function SelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allOption = _t.first);
          }
        },
        inputs: {
          options: "options",
          optionsTranslate: "optionsTranslate",
          valueAttribute: "valueAttribute",
          labelAttribute: "labelAttribute",
          multiple: "multiple",
          allOptionLabel: "allOptionLabel",
          useFullOptionAsValue: "useFullOptionAsValue"
        },
        outputs: {
          onFinishedLoading: "onFinishedLoading"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 10,
        vars: 13,
        consts: [[3, "id", "ngClass"], [3, "label", "labelTranslate", "comment", "required"], ["appearance", "outline", "floatLabel", "never", "color", "primary", 1, "w-100", "mat-form-field-label-out"], [3, "formControl", "multiple", "selectionChange"], [3, "value", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showRegularOptions", ""], [4, "ngIf"], ["class", "loading-options-error", 4, "ngIf"], [3, "value"], ["allOption", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["aria-label", "false"], [1, "loading-options-error"]],
        template: function SelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SelectComponent_Template_mat_select_selectionChange_3_listener($event) {
              return ctx.onChangeSelection($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_mat_option_4_Template, 3, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SelectComponent_mat_error_8_Template, 6, 3, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectComponent_div_9_Template, 4, 1, "div", 8);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.controlName, "-div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.label)("labelTranslate", ctx.labelTranslate)("comment", ctx.labelComment)("required", ctx.isRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("multiple", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOptionLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionsTranslate == null ? null : ctx.optionsTranslate.length)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoadingOptionsError);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__["InputLabelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: [".loading-options-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -moz-column-gap: 0.5em;\n       column-gap: 0.5em;\n  color: red;\n  font-size: smaller;\n  font-style: italic;\n  margin-bottom: 4px;\n}\n.loading-options-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFFQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFNBQUE7QUFBUiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1vcHRpb25zLWVycm9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDAuNWVtO1xyXG5cclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn0iXX0= */", ".d-flex-col[_ngcontent-%COMP%] {\n  gap: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0oiLCJmaWxlIjoiYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4LWNvbCB7XHJcbiAgICBnYXA6IDByZW07XHJcbn1cclxuIl19 */"]
      });

      var ɵSelectComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SelectComponent);
      /***/

    },

    /***/
    "S4pq":
    /*!***********************************************************!*\
      !*** ./src/app/views/game-builder/game-builder.module.ts ***!
      \***********************************************************/

    /*! exports provided: GameBuilderModule */

    /***/
    function S4pq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameBuilderModule", function () {
        return GameBuilderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/input/input.module */
      "1Mzz");
      /* harmony import */


      var _game_builder_form_background_image_form_background_image_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game-builder-form/background-image-form/background-image-form.component */
      "iOa7");
      /* harmony import */


      var _game_builder_form_cards_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./game-builder-form/cards/card-form/card-form.component */
      "ZNbn");
      /* harmony import */


      var _game_builder_form_cards_card_image_filename_example_dialog_card_image_filename_example_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./game-builder-form/cards/card-image-filename-example-dialog/card-image-filename-example-dialog.component */
      "ImFY");
      /* harmony import */


      var _game_builder_form_cards_card_urls_card_pair_url_inputs_card_pair_url_inputs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./game-builder-form/cards/card-urls/card-pair-url-inputs/card-pair-url-inputs.component */
      "3hcz");
      /* harmony import */


      var _game_builder_form_cards_card_urls_card_urls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./game-builder-form/cards/card-urls/card-urls.component */
      "M3mD");
      /* harmony import */


      var _game_builder_form_game_builder_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./game-builder-form/game-builder-form.component */
      "4ECR");
      /* harmony import */


      var _game_builder_game_builder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./game-builder/game-builder.component */
      "Lpt5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _shared_components_input_upload_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../shared/components/input/upload/upload.component */
      "1mk4");
      /* harmony import */


      var _shared_components_input_select_select_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared/components/input/select/select/select.component */
      "OlXG");
      /* harmony import */


      var _shared_components_input_select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../shared/components/input/select/select-yes-no/select-yes-no.component */
      "oJA7");
      /* harmony import */


      var _shared_components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../shared/components/input/input-text/input-text.component */
      "z1KF");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var routes = [{
        path: '',
        component: _game_builder_game_builder_component__WEBPACK_IMPORTED_MODULE_12__["GameBuilderComponent"]
      }, {
        path: 'demo',
        component: _game_builder_game_builder_component__WEBPACK_IMPORTED_MODULE_12__["GameBuilderComponent"],
        data: {
          demo: true
        }
      }];

      var GameBuilderModule = /*#__PURE__*/_createClass(function GameBuilderModule() {
        _classCallCheck(this, GameBuilderModule);
      });

      GameBuilderModule.ɵfac = function GameBuilderModule_Factory(t) {
        return new (t || GameBuilderModule)();
      };

      GameBuilderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: GameBuilderModule
      });
      GameBuilderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](GameBuilderModule, {
          declarations: [_game_builder_game_builder_component__WEBPACK_IMPORTED_MODULE_12__["GameBuilderComponent"], _game_builder_form_game_builder_form_component__WEBPACK_IMPORTED_MODULE_11__["GameBuilderFormComponent"], _game_builder_form_background_image_form_background_image_form_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundImageFormComponent"], _game_builder_form_cards_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_7__["CardFormComponent"], _game_builder_form_cards_card_image_filename_example_dialog_card_image_filename_example_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CardImageFilenameExampleDialogComponent"], _game_builder_form_cards_card_urls_card_urls_component__WEBPACK_IMPORTED_MODULE_10__["CardUrlsInputComponent"], _game_builder_form_cards_card_urls_card_pair_url_inputs_card_pair_url_inputs_component__WEBPACK_IMPORTED_MODULE_9__["CardPairUrlInputsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"]]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_game_builder_game_builder_component__WEBPACK_IMPORTED_MODULE_12__["GameBuilderComponent"], [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _game_builder_form_game_builder_form_component__WEBPACK_IMPORTED_MODULE_11__["GameBuilderFormComponent"], _shared_components_input_upload_upload_component__WEBPACK_IMPORTED_MODULE_16__["UploadComponent"]], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]]);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_game_builder_form_game_builder_form_component__WEBPACK_IMPORTED_MODULE_11__["GameBuilderFormComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_select_select_select_component__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"], _shared_components_input_select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_18__["SelectYesNoComponent"], _shared_components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_19__["InputTextComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDivider"], _game_builder_form_background_image_form_background_image_form_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundImageFormComponent"], _game_builder_form_cards_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_7__["CardFormComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"]], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]]);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_game_builder_form_cards_card_urls_card_urls_component__WEBPACK_IMPORTED_MODULE_10__["CardUrlsInputComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _game_builder_form_cards_card_urls_card_pair_url_inputs_card_pair_url_inputs_component__WEBPACK_IMPORTED_MODULE_9__["CardPairUrlInputsComponent"]], []);
      /***/

    },

    /***/
    "S9+U":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/components/input/image/input-image-url/input-image-url.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: InputImageUrlComponent */

    /***/
    function S9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputImageUrlComponent", function () {
        return InputImageUrlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../input-text/input-text.component */
      "z1KF");
      /* harmony import */


      var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../image-preview/image-preview.component */
      "zaHm");

      var InputImageUrlComponent = /*#__PURE__*/function () {
        function InputImageUrlComponent() {
          _classCallCheck(this, InputImageUrlComponent);
        }

        _createClass(InputImageUrlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formControl = this.form.get(this.controlName);
          }
        }, {
          key: "deleteUrl",
          value: function deleteUrl() {
            this.formControl.setValue(null);
          }
        }]);

        return InputImageUrlComponent;
      }();

      InputImageUrlComponent.ɵfac = function InputImageUrlComponent_Factory(t) {
        return new (t || InputImageUrlComponent)();
      };

      InputImageUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputImageUrlComponent,
        selectors: [["app-input-image-url"]],
        inputs: {
          labelTranslate: "labelTranslate",
          label: "label",
          form: "form",
          controlName: "controlName"
        },
        decls: 3,
        vars: 4,
        consts: [[1, "d-flex-row"], [1, "flex-8", 3, "label", "form", "controlName"], [1, "flex-4", 3, "src", "onDelete"]],
        template: function InputImageUrlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-text", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-image-preview", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function InputImageUrlComponent_Template_app_image_preview_onDelete_2_listener() {
              return ctx.deleteUrl();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.label)("form", ctx.form)("controlName", ctx.controlName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.formControl == null ? null : ctx.formControl.value);
          }
        },
        directives: [_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_1__["InputTextComponent"], _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_2__["ImagePreviewComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1pbWFnZS11cmwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "T3tV":
    /*!**************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/game-build-form-input.values.ts ***!
      \**************************************************************************************/

    /*! exports provided: GAME_BUILDER_FORM_INPUT */

    /***/
    function T3tV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GAME_BUILDER_FORM_INPUT", function () {
        return GAME_BUILDER_FORM_INPUT;
      });

      var GAME_BUILDER_FORM_INPUT = {
        cardIdType: 'cardIdType',
        addBackgroundImg: 'addBackgroundImg',
        backgroundImgSrc: 'backgroundImgSrc',
        card: {
          singleCardPerPair: 'singleCardPerPair',
          addCustomSoundsPerCard: 'addCustomSoundsPerCard',
          cardSrcType: 'cardSrcType',
          // for srcType UPLOAD
          upload: {
            images: 'cardUploadImages',
            audios: 'cardUploadAudios'
          },
          // for srcType URL        
          numPairs: 'numPairs',
          urls: 'cardUrls'
        }
      };
      /***/
    },

    /***/
    "UHcN":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/input/input-label/input-label.component.ts ***!
      \******************************************************************************/

    /*! exports provided: InputLabelComponent */

    /***/
    function UHcN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputLabelComponent", function () {
        return InputLabelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function InputLabelComponent_mat_label_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.comment);
        }
      }

      function InputLabelComponent_mat_label_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputLabelComponent_mat_label_0_span_3_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, "TRANSLATION", ctx_r0.labelTranslate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.required ? "*" : "", "");
        }
      }

      function InputLabelComponent_ng_template_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.comment);
        }
      }

      function InputLabelComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputLabelComponent_ng_template_1_span_1_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.comment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.required ? "*" : "", "");
        }
      }

      var InputLabelComponent = /*#__PURE__*/_createClass(function InputLabelComponent() {
        _classCallCheck(this, InputLabelComponent);

        this.required = true;
      });

      InputLabelComponent.ɵfac = function InputLabelComponent_Factory(t) {
        return new (t || InputLabelComponent)();
      };

      InputLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputLabelComponent,
        selectors: [["app-input-label"]],
        inputs: {
          labelTranslate: "labelTranslate",
          label: "label",
          required: "required",
          comment: "comment"
        },
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["showRegularLabel", ""], ["class", "input-label-comment", 4, "ngIf"], [1, "input-label-required"], [1, "input-label-comment"]],
        template: function InputLabelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputLabelComponent_mat_label_0_Template, 6, 6, "mat-label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputLabelComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.labelTranslate)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["mat-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.input-label-required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.input-label-comment[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGlucHV0LWxhYmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaW5wdXQtbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5wdXQtbGFiZWwtY29tbWVudCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "UZ7P":
    /*!******************************************!*\
      !*** ./src/app/shared/util/form.util.ts ***!
      \******************************************/

    /*! exports provided: FormUtil */

    /***/
    function UZ7P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormUtil", function () {
        return FormUtil;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var FormUtil = /*#__PURE__*/function () {
        function FormUtil() {
          _classCallCheck(this, FormUtil);
        }

        _createClass(FormUtil, null, [{
          key: "setFormControlAsRequiredOrNot",
          value: function setFormControlAsRequiredOrNot(control, required) {
            if (required) {
              this.setFormControlAsRequired(control);
            } else {
              this.setFormControlAsNotRequired(control);
            }
          }
        }, {
          key: "setFormControlAsRequired",
          value: function setFormControlAsRequired(control) {
            control.reset();
            control.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
            control.updateValueAndValidity();
          }
        }, {
          key: "setFormControlAsNotRequired",
          value: function setFormControlAsNotRequired(control) {
            control.reset();
            control.clearValidators();
            control.updateValueAndValidity();
          }
        }, {
          key: "setFormControlAsInvalid",
          value: function setFormControlAsInvalid(control) {
            control === null || control === void 0 ? void 0 : control.setErrors({
              'invalid': true
            });
            control === null || control === void 0 ? void 0 : control.markAsTouched();
          }
        }, {
          key: "setFormControlAsValid",
          value: function setFormControlAsValid(control, required) {
            control === null || control === void 0 ? void 0 : control.setErrors(required ? {
              'required': true
            } : null);
            control === null || control === void 0 ? void 0 : control.markAsTouched();
          }
        }]);

        return FormUtil;
      }();
      /***/

    },

    /***/
    "ZNbn":
    /*!*********************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/cards/card-form/card-form.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CardFormComponent */

    /***/
    function ZNbn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardFormComponent", function () {
        return CardFormComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/constants/global.values */
      "nAIU");
      /* harmony import */


      var src_app_shared_enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/enums/file-upload-type.enum */
      "0zQy");
      /* harmony import */


      var src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/enums/media-src-type.enum */
      "BUnV");
      /* harmony import */


      var src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/util/form.util */
      "UZ7P");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../game-builder-values */
      "1KsR");
      /* harmony import */


      var _game_build_form_input_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../game-build-form-input.values */
      "T3tV");
      /* harmony import */


      var _card_image_filename_example_dialog_card_image_filename_example_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../card-image-filename-example-dialog/card-image-filename-example-dialog.component */
      "ImFY");
      /* harmony import */


      var _url_pair_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../url-pair-config.model */
      "za4a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/feedback.service */
      "kcTb");
      /* harmony import */


      var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/game.service */
      "VdwR");
      /* harmony import */


      var _shared_components_input_select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../shared/components/input/select/select-yes-no/select-yes-no.component */
      "oJA7");
      /* harmony import */


      var _shared_components_input_select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../shared/components/input/select/select-media-src-type/select-media-src-type.component */
      "wGwP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_input_upload_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../shared/components/input/upload/upload.component */
      "1mk4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _shared_components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../../shared/components/input/input-number/input-number.component */
      "uNuV");
      /* harmony import */


      var _card_urls_card_urls_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../card-urls/card-urls.component */
      "M3mD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function CardFormComponent_div_7_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CardFormComponent_div_7_div_5_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r6.openExample();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 2, "TRANSLATION", ctx_r3.TRANSLATION.cards.upload.images.diffImagesPerPair.warning), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 5, "TRANSLATION", ctx_r3.TRANSLATION.cards.upload.images.diffImagesPerPair.warningLink), " ");
        }
      }

      function CardFormComponent_div_7_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-upload", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onUpload", function CardFormComponent_div_7_div_6_Template_app_upload_onUpload_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

            return ctx_r8.receiveUploads(ctx_r8.FORM_INPUT.upload.images);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileType", ctx_r4.UploadFileType.AUDIO)("labelTranslate", ctx_r4.TRANSLATION.cards.upload.audios.pickDirPath)("form", ctx_r4.form)("controlName", ctx_r4.FORM_INPUT.upload.audios)("selectAllDir", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 6, "TRANSLATION", ctx_r4.TRANSLATION.cards.upload.audios.instruction));
        }
      }

      function CardFormComponent_div_7_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 1, "TRANSLATION", ctx_r5.invalidUploadMsg));
        }
      }

      function CardFormComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "app-upload", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onUpload", function CardFormComponent_div_7_Template_app_upload_onUpload_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r10.receiveUploads(ctx_r10.FORM_INPUT.upload.audios);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CardFormComponent_div_7_div_5_Template, 10, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CardFormComponent_div_7_div_6_Template, 9, 9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, CardFormComponent_div_7_div_7_Template, 6, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileType", ctx_r0.UploadFileType.IMAGE)("labelTranslate", ctx_r0.TRANSLATION.cards.upload.images.pickDirPath)("form", ctx_r0.form)("controlName", ctx_r0.FORM_INPUT.upload.images)("selectAllDir", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showFilePatternWarning);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.flag.showAudioUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.invalidUploadMsg);
        }
      }

      function CardFormComponent_app_input_number_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-input-number", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function CardFormComponent_app_input_number_8_Template_app_input_number_onChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r12.onChangeNumPairsForUrl($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("labelTranslate", ctx_r1.TRANSLATION.numPairs)("form", ctx_r1.form)("controlName", ctx_r1.FORM_INPUT.numPairs)("min", ctx_r1.MIN_NUM_PAIRS);
        }
      }

      function CardFormComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-card-urls", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx_r2.form)("controlName", ctx_r2.FORM_INPUT.urls)("urlPairConfig", ctx_r2.urlPairConfig);
        }
      }

      var ANIMATION_TIMEOUT = 500;
      var STATE = {
        show: 'show',
        hide: 'hide'
      };

      var CardFormComponent = /*#__PURE__*/function () {
        function CardFormComponent(feedbackService, gameService) {
          _classCallCheck(this, CardFormComponent);

          this.feedbackService = feedbackService;
          this.gameService = gameService;
          this.UploadFileType = src_app_shared_enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_3__["FileUploadTypeEnum"];
          this.FORM_INPUT = _game_build_form_input_values__WEBPACK_IMPORTED_MODULE_7__["GAME_BUILDER_FORM_INPUT"].card;
          this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_6__["GAME_BUILDER_TRANSLATION"].input;
          this.FILENAME_SEP = src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_2__["VALUES"].upload.fileNameSeparator;
          this.MIN_NUM_PAIRS = 2;
          this.stateUrlInputs = STATE.hide;
        }

        _createClass(CardFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.parent.form;

            this._initFlags();
          }
        }, {
          key: "_initFlags",
          value: function _initFlags() {
            this.flag = {
              isUpload: null,
              showFilePatternWarning: false,
              showAudioUpload: false
            };
          }
        }, {
          key: "_addCustomSoundsPerCard",
          get: function get() {
            return this.form.get(this.FORM_INPUT.addCustomSoundsPerCard).value;
          }
        }, {
          key: "_singleCardPerPair",
          get: function get() {
            return this.form.get(this.FORM_INPUT.singleCardPerPair).value;
          }
        }, {
          key: "showFilePatternWarning",
          get: function get() {
            try {
              return this.flag.isUpload && this._singleCardPerPair === false;
            } catch (error) {
              return false;
            }
          }
        }, {
          key: "changeAddCustomAudios",
          value: function changeAddCustomAudios($addCustomAudios) {
            this.flag.showAudioUpload = this.flag.isUpload && $addCustomAudios;

            if (this.flag.showAudioUpload) {
              this._addUploadAudioControl();
            } else if (this.flag.isUpload) {
              this.form.removeControl(this.FORM_INPUT.upload.audios);
            }

            this.receivePairConfigChange();
          }
        }, {
          key: "onChangeNumPairsForUrl",
          value: function onChangeNumPairsForUrl($numPairs) {
            if ($numPairs < this.MIN_NUM_PAIRS) {
              return;
            }

            this.receivePairConfigChange();
          }
        }, {
          key: "receivePairConfigChange",
          value: function receivePairConfigChange(numPairs) {
            var _a;

            var singleCardPerPair = this._singleCardPerPair;
            var addCustomAudioPerPair = this._addCustomSoundsPerCard;
            numPairs = numPairs !== null && numPairs !== void 0 ? numPairs : (_a = this.form.get(this.FORM_INPUT.numPairs)) === null || _a === void 0 ? void 0 : _a.value;

            if (this.flag.isUpload || [singleCardPerPair, addCustomAudioPerPair, numPairs].some(function (value) {
              return value == null;
            })) {
              this._removeUrlInputs();

              return;
            }

            this.urlPairConfig = new _url_pair_config_model__WEBPACK_IMPORTED_MODULE_9__["UrlPairConfig"](singleCardPerPair, addCustomAudioPerPair, numPairs);
            this.stateUrlInputs = STATE.show;
          }
        }, {
          key: "_removeUrlInputs",
          value: function _removeUrlInputs() {
            var _this9 = this;

            this.stateUrlInputs = STATE.hide;
            setTimeout(function () {
              _this9.urlPairConfig = null;
            }, ANIMATION_TIMEOUT);
          }
        }, {
          key: "onChangeCardSrcType",
          value: function onChangeCardSrcType($value) {
            this.flag.isUpload = $value === src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_4__["MediaSourceTypeEnum"].UPLOAD;
            this.flag.showAudioUpload = this.flag.isUpload && this._addCustomSoundsPerCard;

            if (this.flag.isUpload) {
              this.form.addControl(this.FORM_INPUT.upload.images, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));

              if (this.flag.showAudioUpload) {
                this._addUploadAudioControl();
              }

              this.form.removeControl(this.FORM_INPUT.numPairs);

              this._removeUrlInputs();
            } else {
              this.form.removeControl(this.FORM_INPUT.upload.images);
              this.form.removeControl(this.FORM_INPUT.upload.audios);
              this.form.addControl(this.FORM_INPUT.numPairs, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(this.MIN_NUM_PAIRS)]));
            }
          }
        }, {
          key: "_addUploadAudioControl",
          value: function _addUploadAudioControl() {
            this.form.addControl(this.FORM_INPUT.upload.audios, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
          }
        }, {
          key: "receiveUploads",
          value: function receiveUploads(siblingControlName) {
            var _a, _b;

            var siblingFileUploadLen = ((_b = (_a = this.form.get(siblingControlName)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : []).length;

            if (!siblingFileUploadLen) {
              return;
            }

            var cardUploadInput = this.FORM_INPUT.upload;
            var imageControl = this.form.get(cardUploadInput.images);
            var audioControl = this.form.get(cardUploadInput.audios);

            try {
              this.gameService.validateCardUploads(imageControl.value, audioControl.value);
              this.invalidUploadMsg = null;
              src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_5__["FormUtil"].setFormControlAsValid(imageControl, false);
              src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_5__["FormUtil"].setFormControlAsValid(audioControl, false);
            } catch (error) {
              this.invalidUploadMsg = this.feedbackService.handleError(error);
              src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_5__["FormUtil"].setFormControlAsInvalid(imageControl);
              src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_5__["FormUtil"].setFormControlAsInvalid(audioControl);
            }
          }
        }, {
          key: "openExample",
          value: function openExample() {
            this.feedbackService.dialog.openCustomDialog(_card_image_filename_example_dialog_card_image_filename_example_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CardImageFilenameExampleDialogComponent"], 80);
          }
        }]);

        return CardFormComponent;
      }();

      CardFormComponent.ɵfac = function CardFormComponent_Factory(t) {
        return new (t || CardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_11__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_12__["GameService"]));
      };

      CardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: CardFormComponent,
        selectors: [["app-card-form"]],
        inputs: {
          parent: "parent"
        },
        decls: 11,
        vars: 20,
        consts: [[1, "form-line"], [3, "label", "form", "controlName", "onChange"], [3, "form", "controlName", "multiple", "onChange"], [1, "form-line", "mt-3", "mb-3", 3, "ngSwitch"], ["class", "d-flex-col", 4, "ngSwitchCase"], [3, "labelTranslate", "form", "controlName", "min", "onChange", 4, "ngSwitchCase"], ["class", "form-line", 4, "ngIf"], [1, "d-flex-col"], [1, "uploads"], [1, "upload-div"], [3, "fileType", "labelTranslate", "form", "controlName", "selectAllDir", "onUpload"], ["class", "file-warning", 4, "ngIf"], ["class", "upload-div", 4, "ngIf"], ["class", "mat-custom-error", 4, "ngIf"], [1, "file-warning"], [1, "example-link", 3, "click"], [1, "mat-custom-error"], ["aria-label", "false"], [3, "labelTranslate", "form", "controlName", "min", "onChange"], [1, "form-item", "mt-3"], [3, "form", "controlName", "urlPairConfig"]],
        template: function CardFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-select-yes-no", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function CardFormComponent_Template_app_select_yes_no_onChange_1_listener() {
              return ctx.receivePairConfigChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "app-select-yes-no", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function CardFormComponent_Template_app_select_yes_no_onChange_3_listener($event) {
              return ctx.changeAddCustomAudios($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "app-select-media-src-type", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function CardFormComponent_Template_app_select_media_src_type_onChange_5_listener($event) {
              return ctx.onChangeCardSrcType($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, CardFormComponent_div_7_Template, 8, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, CardFormComponent_app_input_number_8_Template, 1, 4, "app-input-number", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CardFormComponent_div_10_Template, 3, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 14, "TRANSLATION", ctx.TRANSLATION.singleCardPerPair));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.form)("controlName", ctx.FORM_INPUT.singleCardPerPair);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 17, "TRANSLATION", ctx.TRANSLATION.addCustomSoundsPerCard));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.form)("controlName", ctx.FORM_INPUT.addCustomSoundsPerCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("form", ctx.form)("controlName", ctx.FORM_INPUT.cardSrcType)("multiple", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx.flag.isUpload);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@showContent", ctx.stateUrlInputs);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.urlPairConfig);
          }
        },
        directives: [_shared_components_input_select_select_yes_no_select_yes_no_component__WEBPACK_IMPORTED_MODULE_13__["SelectYesNoComponent"], _shared_components_input_select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_14__["SelectMediaSrcTypeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_input_upload_upload_component__WEBPACK_IMPORTED_MODULE_16__["UploadComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_components_input_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_18__["InputNumberComponent"], _card_urls_card_urls_component__WEBPACK_IMPORTED_MODULE_19__["CardUrlsInputComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"]],
        styles: [".layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.uploads[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  -moz-column-gap: 4rem;\n       column-gap: 4rem;\n  row-gap: 2rem;\n}\n\n.upload-div[_ngcontent-%COMP%] {\n  flex: 6 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 50%;\n}\n\n.file-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: #e89c12;\n  color: white;\n  padding: 4px;\n  border-radius: 2px;\n}\n\n.num-pairs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\n.num-pairs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.example-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjYXJkLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtBQUNSOztBQUdBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBQUoiLCJmaWxlIjoiY2FyZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udXBsb2FkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGNvbHVtbi1nYXA6IDRyZW07XHJcbiAgICByb3ctZ2FwOiAycmVtO1xyXG59XHJcblxyXG4udXBsb2FkLWRpdiB7XHJcbiAgICBmbGV4OiA2IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmZpbGUtd2FybmluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4OWMxMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLm51bS1wYWlycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(STATE.show, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            overflow: 'hidden',
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(STATE.hide, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            overflow: 'hidden',
            height: '0px',
            opacity: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(ANIMATION_TIMEOUT, "ms ease-in-out")))])]
        }
      });
      /***/
    },

    /***/
    "iOa7":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/background-image-form/background-image-form.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: BackgroundImageFormComponent */

    /***/
    function iOa7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundImageFormComponent", function () {
        return BackgroundImageFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/enums/media-src-type.enum */
      "BUnV");
      /* harmony import */


      var src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/util/form.util */
      "UZ7P");
      /* harmony import */


      var _game_builder_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../game-builder-values */
      "1KsR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_input_select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/components/input/select/select-media-src-type/select-media-src-type.component */
      "wGwP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_input_image_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/components/input/image/image-preview/image-preview.component */
      "zaHm");
      /* harmony import */


      var _shared_components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/components/input/input-text/input-text.component */
      "z1KF");
      /* harmony import */


      var _shared_components_input_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../shared/components/input/upload/upload.component */
      "1mk4");

      var _c0 = ["upload"];

      function BackgroundImageFormComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-text", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function BackgroundImageFormComponent_div_5_Template_app_input_text_onChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.onInsertUrl($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("labelTranslate", ctx_r0.TRANSLATION.url)("form", ctx_r0.form)("controlName", ctx_r0.myControlName.url);
        }
      }

      function BackgroundImageFormComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-upload", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClearInput", function BackgroundImageFormComponent_div_6_Template_app_upload_onClearInput_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r5.deleteFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("labelTranslate", ctx_r1.TRANSLATION.upload)("form", ctx_r1.form)("controlName", ctx_r1.myControlName.upload);
        }
      }

      var BackgroundImageFormComponent = /*#__PURE__*/function () {
        function BackgroundImageFormComponent() {
          _classCallCheck(this, BackgroundImageFormComponent);

          this.TRANSLATION = _game_builder_values__WEBPACK_IMPORTED_MODULE_3__["GAME_BUILDER_TRANSLATION"].input.backgroundImg;
          this.myControlName = {};
        }

        _createClass(BackgroundImageFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.myControlName = {
              srcType: "".concat(this.controlName, "SrcType"),
              url: "".concat(this.controlName, "Url"),
              upload: "".concat(this.controlName, "Upload")
            };
            this.form.addControl(this.myControlName.srcType, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
            this.form.addControl(this.myControlName.url, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]());
            this.form.addControl(this.myControlName.upload, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]());
            this.form.get(this.myControlName.upload).valueChanges.subscribe(function (value) {
              return _this10._onUpload(value);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this11 = this;

            Object.values(this.myControlName).forEach(function (controlName) {
              return _this11.form.removeControl(controlName);
            });
          }
        }, {
          key: "onChooseInputType",
          value: function onChooseInputType($srcType) {
            this.isUrl = $srcType == src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_1__["MediaSourceTypeEnum"].URL;
            this.imgPreview = null;
            this.form.get(this.controlName).setValue(null);

            if (this.isUrl) {
              this._setFormControlAsRequired(this.myControlName.url);

              this._setFormControlAsNotRequired(this.myControlName.upload);
            } else {
              this._setFormControlAsRequired(this.myControlName.upload);

              this._setFormControlAsNotRequired(this.myControlName.url);
            }
          }
        }, {
          key: "_setFormControlAsRequired",
          value: function _setFormControlAsRequired(controlName) {
            src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_2__["FormUtil"].setFormControlAsRequired(this.form.get(controlName));
          }
        }, {
          key: "_setFormControlAsNotRequired",
          value: function _setFormControlAsNotRequired(controlName) {
            src_app_shared_util_form_util__WEBPACK_IMPORTED_MODULE_2__["FormUtil"].setFormControlAsNotRequired(this.form.get(controlName));
          }
        }, {
          key: "_onUpload",
          value: function _onUpload(cardImages) {
            if (!(cardImages === null || cardImages === void 0 ? void 0 : cardImages.length)) {
              this._setImage(null);

              return;
            }

            this._setImage(cardImages[0].src);
          }
        }, {
          key: "onInsertUrl",
          value: function onInsertUrl($url) {
            var value = $url;

            if (!$url) {
              value = null;
            }

            this._setImage(value);
          }
        }, {
          key: "_setImage",
          value: function _setImage(src) {
            this.imgPreview = src;
            this.form.get(this.controlName).setValue(src);
          }
        }, {
          key: "deleteFile",
          value: function deleteFile() {
            var _this12 = this;

            var _a;

            [this.myControlName.url, this.myControlName.upload].forEach(function (controlName) {
              return _this12.form.get(controlName).setValue(null);
            });

            this._setImage(null);

            (_a = this._uploadChild) === null || _a === void 0 ? void 0 : _a.reset();
          }
        }]);

        return BackgroundImageFormComponent;
      }();

      BackgroundImageFormComponent.ɵfac = function BackgroundImageFormComponent_Factory(t) {
        return new (t || BackgroundImageFormComponent)();
      };

      BackgroundImageFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: BackgroundImageFormComponent,
        selectors: [["app-background-image-form"]],
        viewQuery: function BackgroundImageFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._uploadChild = _t.first);
          }
        },
        inputs: {
          form: "form",
          controlName: "controlName"
        },
        decls: 8,
        vars: 7,
        consts: [[1, "input-image"], [3, "form", "controlName", "onChange"], [1, "form-item"], [1, "input-preview"], [3, "ngSwitch", "ngClass"], [4, "ngSwitchCase"], [3, "src", "onDelete"], [3, "labelTranslate", "form", "controlName", "onChange"], [3, "labelTranslate", "form", "controlName", "onClearInput"], ["upload", ""]],
        template: function BackgroundImageFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-select-media-src-type", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function BackgroundImageFormComponent_Template_app_select_media_src_type_onChange_1_listener($event) {
              return ctx.onChooseInputType($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BackgroundImageFormComponent_div_5_Template, 2, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BackgroundImageFormComponent_div_6_Template, 3, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-image-preview", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onDelete", function BackgroundImageFormComponent_Template_app_image_preview_onDelete_7_listener() {
              return ctx.deleteFile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.form)("controlName", ctx.myControlName.srcType);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.isUrl)("ngClass", ctx.isUrl ? "form-item" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.imgPreview);
          }
        },
        directives: [_shared_components_input_select_select_media_src_type_select_media_src_type_component__WEBPACK_IMPORTED_MODULE_5__["SelectMediaSrcTypeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _shared_components_input_image_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_7__["ImagePreviewComponent"], _shared_components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _shared_components_input_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"]],
        styles: [".input-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: flex-start;\n}\n\n.input-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.img-preview[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJhY2tncm91bmQtaW1hZ2UtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImJhY2tncm91bmQtaW1hZ2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uaW5wdXQtcHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1wcmV2aWV3IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "n9cC":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/components/input/upload/upload-values.ts ***!
      \*****************************************************************/

    /*! exports provided: UPLOAD_TRANSLATION */

    /***/
    function n9cC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPLOAD_TRANSLATION", function () {
        return UPLOAD_TRANSLATION;
      });
      /* harmony import */


      var _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../enums/file-upload-type.enum */
      "0zQy");

      var UPLOAD_TRANSLATION = {
        noFileChosen: {
          pt: 'Nenhum arquivo escolhido',
          en: 'No file chosen'
        },
        nonMultiple: {
          btn: {
            pt: 'Escolher arquivo',
            en: 'Choose file'
          },
          acceptErrorMsg: {
            pt: 'O arquivo selecionado não é {{ fileType }}. Tente novamente!',
            en: 'The selected file is not {{ fileType }}. Try again!'
          }
        },
        multiple: {
          btn: {
            pt: 'Escolher arquivos',
            en: 'Choose files'
          },
          acceptErrorMsg: {
            pt: 'Pelo menos 1 arquivo da pasta selecionada não é {{ fileType }}. Tente novamente!',
            en: 'At least 1 file in the selected folder is not {{ fileType }} type. Try again!'
          },
          chosenFilesMsg: {
            pt: 'arquivo(s)',
            en: 'file(s)'
          }
        },
        fileType: _defineProperty(_defineProperty(_defineProperty({}, _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_0__["FileUploadTypeEnum"].IMAGE, {
          pt: 'uma imagem',
          en: 'an image'
        }), _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_0__["FileUploadTypeEnum"].AUDIO, {
          pt: 'um áudio',
          en: 'an audio'
        }), _enums_file_upload_type_enum__WEBPACK_IMPORTED_MODULE_0__["FileUploadTypeEnum"].JSON, {
          pt: 'válido',
          en: 'valid'
        })
      };
      /***/
    },

    /***/
    "oJA7":
    /*!*****************************************************************************************!*\
      !*** ./src/app/shared/components/input/select/select-yes-no/select-yes-no.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SelectYesNoComponent */

    /***/
    function oJA7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectYesNoComponent", function () {
        return SelectYesNoComponent;
      });
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../select/select.component */
      "OlXG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelectYesNoComponent = /*#__PURE__*/function (_select_select_compon) {
        _inherits(SelectYesNoComponent, _select_select_compon);

        function SelectYesNoComponent() {
          _classCallCheck(this, SelectYesNoComponent);

          return _callSuper(this, SelectYesNoComponent, arguments);
        }

        _createClass(SelectYesNoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.options = [{
              id: true,
              label: {
                pt: 'Sim',
                en: 'Yes'
              }
            }, {
              id: false,
              label: {
                pt: 'Não',
                en: 'No'
              }
            }];
          }
        }]);

        return SelectYesNoComponent;
      }(_select_select_component__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"]);

      SelectYesNoComponent.ɵfac = function SelectYesNoComponent_Factory(t) {
        return ɵSelectYesNoComponent_BaseFactory(t || SelectYesNoComponent);
      };

      SelectYesNoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SelectYesNoComponent,
        selectors: [["app-select-yes-no"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[3, "label", "labelTranslate", "form", "controlName", "optionsTranslate", "onChange"]],
        template: function SelectYesNoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function SelectYesNoComponent_Template_app_select_onChange_0_listener($event) {
              return ctx.onChangeSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.label)("labelTranslate", ctx.labelTranslate)("form", ctx.form)("controlName", ctx.controlName)("optionsTranslate", ctx.options);
          }
        },
        directives: [_select_select_component__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"]],
        encapsulation: 2
      });

      var ɵSelectYesNoComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SelectYesNoComponent);
      /***/

    },

    /***/
    "svK9":
    /*!******************************************************************************************************!*\
      !*** ./src/app/shared/components/input/select/select-media-src-type/select-media-src-type-values.ts ***!
      \******************************************************************************************************/

    /*! exports provided: SRC_TYPE_TRANSLATION_VALUES */

    /***/
    function svK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SRC_TYPE_TRANSLATION_VALUES", function () {
        return SRC_TYPE_TRANSLATION_VALUES;
      });

      var SRC_TYPE_TRANSLATION_VALUES = {
        nonMultiple: {
          input: {
            pt: 'Como deseja inserir a imagem?',
            en: 'How do you want to insert the image?'
          },
          options: {
            url: {
              pt: 'Link da imagem',
              en: 'Image link'
            },
            upload: {
              pt: 'Enviar arquivo',
              en: 'Upload image file'
            }
          }
        },
        multiple: {
          input: {
            pt: 'Como deseja inserir as cartas (imagens e sons)?',
            en: 'How do you want to insert the cards (images and sounds)?'
          },
          options: {
            url: {
              pt: 'Links (URLs)',
              en: 'Links (URLs)'
            },
            upload: {
              pt: 'Enviar arquivos',
              en: 'Upload files'
            }
          }
        }
      };
      /***/
    },

    /***/
    "uNuV":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/input/input-number/input-number.component.ts ***!
      \********************************************************************************/

    /*! exports provided: InputNumberComponent */

    /***/
    function uNuV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function () {
        return InputNumberComponent;
      });
      /* harmony import */


      var _abstract_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../abstract-input.component */
      "HgCf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../input-label/input-label.component */
      "UHcN");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function InputNumberComponent_app_input_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-input-label", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx_r0.label)("labelTranslate", ctx_r0.labelTranslate)("comment", ctx_r0.labelComment)("required", ctx_r0.isRequired);
        }
      }

      function InputNumberComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "FORM_INPUT.REQUIRED"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          min: a0
        };
      };

      function InputNumberComponent_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, "FORM_INPUT.MIN_VALUE", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.min)));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          max: a0
        };
      };

      function InputNumberComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, "FORM_INPUT.MAX_VALUE", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r3.max)));
        }
      }

      function InputNumberComponent_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "FORM_INPUT.INVALID"));
        }
      }

      var InputNumberComponent = /*#__PURE__*/function (_abstract_input_compo3) {
        _inherits(InputNumberComponent, _abstract_input_compo3);

        function InputNumberComponent() {
          var _this13;

          _classCallCheck(this, InputNumberComponent);

          _this13 = _callSuper(this, InputNumberComponent, arguments);
          _this13.min = null;
          _this13.max = null;
          return _this13;
        }

        _createClass(InputNumberComponent, [{
          key: "sendValueChange",
          value: function sendValueChange($event) {
            var _a;

            var value = (_a = $event === null || $event === void 0 ? void 0 : $event.target) === null || _a === void 0 ? void 0 : _a.valueAsNumber;

            if (isNaN(value)) {
              value = null;
            }

            this.onChange.emit(value);
          }
        }]);

        return InputNumberComponent;
      }(_abstract_input_component__WEBPACK_IMPORTED_MODULE_0__["AbstractInputComponent"]);

      InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) {
        return ɵInputNumberComponent_BaseFactory(t || InputNumberComponent);
      };

      InputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InputNumberComponent,
        selectors: [["app-input-number"]],
        inputs: {
          min: "min",
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 8,
        vars: 10,
        consts: [[3, "id", "ngClass"], [3, "label", "labelTranslate", "comment", "required", 4, "ngIf"], ["appearance", "outline", "floatLabel", "never", "color", "primary", 1, "w-100", "mat-form-field-label-out"], ["matInput", "", "type", "number", 3, "formControl", "min", "max", "change"], [4, "ngIf"], [3, "label", "labelTranslate", "comment", "required"], ["aria-hidden", "false"], ["aria-label", "false"]],
        template: function InputNumberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputNumberComponent_app_input_label_1_Template, 1, 4, "app-input-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InputNumberComponent_Template_input_change_3_listener($event) {
              return ctx.sendValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InputNumberComponent_mat_error_4_Template, 6, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InputNumberComponent_mat_error_5_Template, 6, 6, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InputNumberComponent_mat_error_6_Template, 6, 6, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InputNumberComponent_mat_error_7_Template, 6, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.controlName, "-div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.label || ctx.labelTranslate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.formControl)("min", ctx.min)("max", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.min != null && ctx.formControl.hasError("min"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.max != null && ctx.formControl.hasError("max"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.min == null && ctx.max == null && ctx.isInvalid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_6__["InputLabelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */", ".d-flex-col[_ngcontent-%COMP%] {\n  gap: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0oiLCJmaWxlIjoiYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4LWNvbCB7XHJcbiAgICBnYXA6IDByZW07XHJcbn1cclxuIl19 */"]
      });

      var ɵInputNumberComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputNumberComponent);
      /***/

    },

    /***/
    "ueZu":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/components/input/audio/input-audio-url/input-audio-url.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: InputAudioUrlComponent */

    /***/
    function ueZu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputAudioUrlComponent", function () {
        return InputAudioUrlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../input-text/input-text.component */
      "z1KF");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var InputAudioUrlComponent = /*#__PURE__*/function () {
        function InputAudioUrlComponent() {
          _classCallCheck(this, InputAudioUrlComponent);

          this.flag = {};
        }

        _createClass(InputAudioUrlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.flag = {
              hasValue: false,
              isPlaying: false
            };
            this._audio = new Audio();
            this.form.get(this.controlName).valueChanges.subscribe(function (value) {
              _this14.flag.hasValue = !!value;
              _this14._audio.src = value;

              if (value) {
                _this14._audio.load();
              }
            });
          }
        }, {
          key: "playPause",
          value: function playPause() {
            this.flag.isPlaying = !this.flag.isPlaying;

            if (this.flag.isPlaying) {
              this._audio.play();
            } else {
              this._audio.pause();
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            this.flag.isPlaying = false;
            this.form.get(this.controlName).setValue(null);
          }
        }]);

        return InputAudioUrlComponent;
      }();

      InputAudioUrlComponent.ɵfac = function InputAudioUrlComponent_Factory(t) {
        return new (t || InputAudioUrlComponent)();
      };

      InputAudioUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputAudioUrlComponent,
        selectors: [["app-input-audio-url"]],
        inputs: {
          labelTranslate: "labelTranslate",
          label: "label",
          form: "form",
          controlName: "controlName"
        },
        decls: 10,
        vars: 7,
        consts: [[1, "d-flex-row"], [1, "flex-8", 3, "labelTranslate", "label", "form", "controlName"], [1, "flex-4"], [1, "d-flex-row", "mt-2"], ["mat-icon-button", "", "mat-stroked-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], ["mat-icon-button", "", "mat-stroked-button", "", "color", "accent", "type", "button", 3, "disabled", "click"]],
        template: function InputAudioUrlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-text", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputAudioUrlComponent_Template_button_click_4_listener() {
              return ctx.playPause();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputAudioUrlComponent_Template_button_click_7_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelTranslate", ctx.labelTranslate)("label", ctx.label)("form", ctx.form)("controlName", ctx.controlName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.flag.hasValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.flag.isPlaying ? "pause" : "play_arrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.flag.hasValue);
          }
        },
        directives: [_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_1__["InputTextComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1hdWRpby11cmwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "wGwP":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/shared/components/input/select/select-media-src-type/select-media-src-type.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: SelectMediaSrcTypeComponent */

    /***/
    function wGwP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMediaSrcTypeComponent", function () {
        return SelectMediaSrcTypeComponent;
      });
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../select/select.component */
      "OlXG");
      /* harmony import */


      var src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/enums/media-src-type.enum */
      "BUnV");
      /* harmony import */


      var _select_media_src_type_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-media-src-type-values */
      "svK9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SelectMediaSrcTypeComponent = /*#__PURE__*/function (_select_select_compon2) {
        _inherits(SelectMediaSrcTypeComponent, _select_select_compon2);

        function SelectMediaSrcTypeComponent() {
          var _this15;

          _classCallCheck(this, SelectMediaSrcTypeComponent);

          _this15 = _callSuper(this, SelectMediaSrcTypeComponent, arguments);
          _this15.TRANSLATION = _select_media_src_type_values__WEBPACK_IMPORTED_MODULE_2__["SRC_TYPE_TRANSLATION_VALUES"];
          return _this15;
        }

        _createClass(SelectMediaSrcTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var translation = this.multiple ? this.TRANSLATION.multiple : this.TRANSLATION.nonMultiple;
            this.labelTranslate = translation.input;
            this.options = [{
              id: src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_1__["MediaSourceTypeEnum"].UPLOAD,
              label: translation.options.upload
            }, {
              id: src_app_shared_enums_media_src_type_enum__WEBPACK_IMPORTED_MODULE_1__["MediaSourceTypeEnum"].URL,
              label: translation.options.url
            }];
          } // override

        }, {
          key: "onChangeSelection",
          value: function onChangeSelection($eventValue) {
            this.onChange.emit($eventValue);
          }
        }]);

        return SelectMediaSrcTypeComponent;
      }(_select_select_component__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"]);

      SelectMediaSrcTypeComponent.ɵfac = function SelectMediaSrcTypeComponent_Factory(t) {
        return ɵSelectMediaSrcTypeComponent_BaseFactory(t || SelectMediaSrcTypeComponent);
      };

      SelectMediaSrcTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SelectMediaSrcTypeComponent,
        selectors: [["app-select-media-src-type"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 4,
        consts: [[3, "labelTranslate", "form", "controlName", "optionsTranslate", "onChange"]],
        template: function SelectMediaSrcTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function SelectMediaSrcTypeComponent_Template_app_select_onChange_0_listener($event) {
              return ctx.onChangeSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("labelTranslate", ctx.labelTranslate)("form", ctx.form)("controlName", ctx.controlName)("optionsTranslate", ctx.options);
          }
        },
        directives: [_select_select_component__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"]],
        encapsulation: 2
      });

      var ɵSelectMediaSrcTypeComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](SelectMediaSrcTypeComponent);
      /***/

    },

    /***/
    "z1KF":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/input/input-text/input-text.component.ts ***!
      \****************************************************************************/

    /*! exports provided: InputTextComponent */

    /***/
    function z1KF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputTextComponent", function () {
        return InputTextComponent;
      });
      /* harmony import */


      var _abstract_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../abstract-input.component */
      "HgCf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../input-label/input-label.component */
      "UHcN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function InputTextComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "FORM_INPUT.REQUIRED"));
        }
      }

      function InputTextComponent_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "FORM_INPUT.INVALID"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          minLength: a0
        };
      };

      function InputTextComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, "FORM_INPUT.MIN_LENGTH", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.minLength)));
        }
      }

      var InputTextComponent = /*#__PURE__*/function (_abstract_input_compo4) {
        _inherits(InputTextComponent, _abstract_input_compo4);

        function InputTextComponent() {
          var _this16;

          _classCallCheck(this, InputTextComponent);

          _this16 = _callSuper(this, InputTextComponent, arguments);
          _this16.placeholder = '';
          _this16.maxLength = 100;
          _this16.title = '';
          return _this16;
        }

        _createClass(InputTextComponent, [{
          key: "clear",
          value: function clear() {
            this.formControl.setValue(null);
          }
        }, {
          key: "sendChangeEvent",
          value: function sendChangeEvent($event) {
            if (!($event === null || $event === void 0 ? void 0 : $event.target)) {
              return;
            }

            this.onChange.emit($event.target.value);
          }
        }, {
          key: "_eventTypeDeleteContent",
          value: function _eventTypeDeleteContent($event) {
            return ($event === null || $event === void 0 ? void 0 : $event.inputType) === 'deleteContentBackward';
          }
        }]);

        return InputTextComponent;
      }(_abstract_input_component__WEBPACK_IMPORTED_MODULE_0__["AbstractInputComponent"]);

      InputTextComponent.ɵfac = function InputTextComponent_Factory(t) {
        return ɵInputTextComponent_BaseFactory(t || InputTextComponent);
      };

      InputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InputTextComponent,
        selectors: [["app-input-text"]],
        inputs: {
          placeholder: "placeholder",
          minLength: "minLength",
          maxLength: "maxLength",
          title: "title"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 7,
        vars: 17,
        consts: [[3, "id", "ngClass"], [3, "label", "labelTranslate", "comment", "required"], ["appearance", "outline", "floatLabel", "never", "color", "primary", 1, "w-100", "mat-form-field-label-out"], ["matInput", "", "type", "text", 3, "formControl", "id", "name", "minLength", "maxLength", "title", "placeholder", "readonly", "change"], [4, "ngIf"], ["aria-label", "false"]],
        template: function InputTextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-input-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InputTextComponent_Template_input_change_3_listener($event) {
              return ctx.sendChangeEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InputTextComponent_mat_error_4_Template, 6, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InputTextComponent_mat_error_5_Template, 6, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InputTextComponent_mat_error_6_Template, 6, 6, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.controlName, "-div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.label)("labelTranslate", ctx.labelTranslate)("comment", ctx.labelComment)("required", ctx.isRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.formControl)("id", ctx.controlName)("name", ctx.controlName)("minLength", ctx.minLength)("maxLength", ctx.maxLength)("title", ctx.title)("placeholder", ctx.placeholder)("readonly", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInvalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.minLength && ctx.hasError("minLength"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__["InputLabelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzIn0= */", ".d-flex-col[_ngcontent-%COMP%] {\n  gap: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0oiLCJmaWxlIjoiYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4LWNvbCB7XHJcbiAgICBnYXA6IDByZW07XHJcbn1cclxuIl19 */"]
      });

      var ɵInputTextComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputTextComponent);
      /***/

    },

    /***/
    "za4a":
    /*!*************************************************************************************!*\
      !*** ./src/app/views/game-builder/game-builder-form/cards/url-pair-config.model.ts ***!
      \*************************************************************************************/

    /*! exports provided: UrlPairConfig */

    /***/
    function za4a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlPairConfig", function () {
        return UrlPairConfig;
      });

      var UrlPairConfig = /*#__PURE__*/function () {
        function UrlPairConfig(singleCardPerPair, addCustomAudioPerPair, numPairs) {
          _classCallCheck(this, UrlPairConfig);

          this.singleCardPerPair = singleCardPerPair;
          this.addCustomAudioPerPair = addCustomAudioPerPair;
          this.numPairs = numPairs;
        }

        _createClass(UrlPairConfig, [{
          key: "numCards",
          get: function get() {
            return this.numPairs * (this.singleCardPerPair ? 1 : 2);
          }
        }]);

        return UrlPairConfig;
      }();
      /***/

    },

    /***/
    "zaHm":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/input/image/image-preview/image-preview.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ImagePreviewComponent */

    /***/
    function zaHm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function () {
        return ImagePreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ImagePreviewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagePreviewComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.deleteFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "DELETE_IMAGE"));
        }
      }

      var ImagePreviewComponent = /*#__PURE__*/function () {
        function ImagePreviewComponent() {
          _classCallCheck(this, ImagePreviewComponent);

          this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ImagePreviewComponent, [{
          key: "deleteFile",
          value: function deleteFile() {
            this.src = null;
            this.onDelete.emit();
          }
        }]);

        return ImagePreviewComponent;
      }();

      ImagePreviewComponent.ɵfac = function ImagePreviewComponent_Factory(t) {
        return new (t || ImagePreviewComponent)();
      };

      ImagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImagePreviewComponent,
        selectors: [["app-image-preview"]],
        inputs: {
          src: "src"
        },
        outputs: {
          onDelete: "onDelete"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "form-line", 4, "ngIf"], [1, "form-line"], ["alt", "Image", 3, "src"], [1, "delete-btn"], ["mat-icon-button", "", "mat-stroked-button", "", "type", "button", "color", "accent", 3, "matTooltip", "click"]],
        template: function ImagePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagePreviewComponent_div_0_Template, 7, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".form-line[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxpbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1saW5lIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-game-builder-game-builder-module-es5.js.map