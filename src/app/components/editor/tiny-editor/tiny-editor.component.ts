import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, NgZone, ViewEncapsulation } from '@angular/core';
import { InsertCodeComponent } from './insert-code/insert-code.component';

declare var $; // jquery
declare var tinymce; // tinyMCE editor

@Component({
    selector: 'app-tiny-editor',
    templateUrl: './tiny-editor.component.html',
    styleUrls: ['./tiny-editor.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TinyEditorComponent implements OnInit {

    // properties
    @Input() markdownHtml: string;
    @Input() height: number;
    @Output('loadComplete') loadComplete = new EventEmitter<boolean>();
    @Output('markdownHtmlChange') markdownHtmlChange = new EventEmitter<string>();
    @ViewChild('tinyEditor') el: ElementRef;

    // editor extension components
    @ViewChild(InsertCodeComponent) private insertCodeComp: InsertCodeComponent;

    private toolbarButtons: any;
    private editor: any;
    private modals: any;
    private openModal: any;

    private modalHeight: number;

    constructor(private zone: NgZone) {
        this.modalHeight = window.innerHeight - 180;
    }

    ngOnInit() {
        // specify available editor modals
        this.modals = {
            'img': { title: 'Select Image', size: 'modal-xl', key: 'img' },
            'code': {
                title: 'Insert Code', size: 'modal-lg', key: 'code',
                comp: this.insertCodeComp,
                data: {
                    code: '',
                    lang: '',
                    node: null
                }
            }
        };
        this.initEditor();
    }

    private initEditor() {

        this.toolbarButtons = {};

        // initialize TinyMCE editor
        tinymce.init({
            target: this.el.nativeElement,
            theme: 'modern',
            content_css: '../../../../assets/tiny-editor-custom-styles.css',
            plugins: 'table link lists hr image codesample',
            height: this.height,
            menubar: false,
            toolbar: 'btnTxt btnH btnCode btnInlineCode | btnBold btnItalic btnStrikethrough '
            + '| numlist bullist | link image | table | btnColAlignLeft btnColAlignCenter btnColAlignRight | hr test',
            branding: false,
            statusbar: false,
            link_title: false,
            target_list: false,
            table_toolbar: 'tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow'
            + ' | tableinsertcolbefore tableinsertcolafter tabledeletecol',
            table_appearance_options: false,
            table_default_attributes: {
                border: 0
              },
            table_advtab: false,
            table_cell_advtab: false,
            table_row_advtab: false,
            setup: (ed) => {
                this.editor = ed;
                this.createCustomToolbarButtons(ed);

                // remove table exta buttons
                ed.on('init', function () {
                    ed.buttons.table.menu.splice(1, 1); // remove table properties button
                    ed.buttons.table.menu.splice(2, 4); // remove cell, row and column buttons
                });

            },
            init_instance_callback: (editor) => {
                (<any>window).ed = editor; // todo: remove

                if (this.markdownHtml) {
                    editor.setContent(this.markdownHtml);
                }

                $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();

                editor.on('NodeChange', (e) => {
                    this.onEditorNodeChange(editor, e);
                });

                editor.on('KeyUp', () => {
                    this.onEditorChange(editor);
                });

                editor.on('ExecCommand', (e) => {
                    this.onEditorChange(editor);
                });

                this.zone.run(() => {
                    this.loadComplete.emit(true);
                });

            }
        });

    }

    /**
     * Create custom toolbar buttons
     * @param editor tinyMCE editor object
     */
    private createCustomToolbarButtons(editor: any) {

        const toolbarButtons = this.toolbarButtons;
        const vm = this;

        // region btngroup 1
        // default text button
        editor.addButton('btnTxt', {
            tooltip: 'Text',
            text: 'txt',
            onclick: () => {
                editor.execCommand('mceToggleFormat', false, 'p');
            },
            onPostRender: function () {
                const self = this; // btn reference
                const setup = function () {
                    editor.formatter.formatChanged('p', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });

        // heading drop down button
        editor.addButton('btnH', {
            type: 'listbox',
            text: 'H1',
            icon: false,
            onselect: function (e) {
                editor.execCommand('mceToggleFormat', false, this.value());
            },
            values: [
                { text: 'H1', value: 'h1' },
                { text: 'H2', value: 'h2' },
                { text: 'H3', value: 'h3' },
                { text: 'H4', value: 'h4' },
                { text: 'H5', value: 'h5' },
                { text: 'H6', value: 'h6' }
            ],
            onPostRender: function () {
                this.value('h1'); // set default value
            }
        });

        // code button
        editor.addButton('btnCode', {
            tooltip: 'Insert Code',
            icon: 'codesample',
            onclick: () => {
                $('.modal').modal('show');
                console.log(vm.insertCodeComp);
                vm.modals['code'].comp = vm.insertCodeComp;
                vm.openModel('code');
            }
        });

        // inline code button
        editor.addButton('btnInlineCode', {
            tooltip: 'Inline Code',
            text: '</>',
            onclick: () => {
                editor.execCommand('mceToggleFormat', false, 'code');
            },
            onPostRender: function () {
                const self = this; // btn reference
                const setup = function () {
                    editor.formatter.formatChanged('code', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });

        // bold button
        editor.addButton('btnBold', {
            tooltip: 'Bold',
            icon: 'bold',
            onclick: () => {
                editor.execCommand('mceToggleFormat', false, 'bold');
            },
            onPostRender: function () {
                const self = this; // btn reference
                toolbarButtons.bold = this;
                const setup = function () {
                    editor.formatter.formatChanged('bold', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });

        // italic button
        editor.addButton('btnItalic', {
            tooltip: 'Italic',
            icon: 'italic',
            onclick: () => {
                editor.execCommand('mceToggleFormat', false, 'italic');
            },
            onPostRender: function () {
                const self = this; // btn reference
                toolbarButtons.italic = this;
                const setup = function () {
                    editor.formatter.formatChanged('italic', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });

        // strikethrough button
        editor.addButton('btnStrikethrough', {
            tooltip: 'Strikethrough',
            icon: 'strikethrough',
            onclick: () => {
                editor.execCommand('mceToggleFormat', false, 'strikethrough');
            },
            onPostRender: function () {
                const self = this; // btn reference
                toolbarButtons.strikethrough = this;
                const setup = function () {
                    editor.formatter.formatChanged('strikethrough', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });

        // endregion

        // region column alignemnt buttons
        // Right align button
        editor.addButton('btnColAlignRight', {
            icon: 'alignright',
            tooltip: 'Right Align column',
            onclick: () => {
                const activeNode = editor.selection.getNode();
                if (activeNode.localName === 'td') {
                    const colIndex = activeNode.cellIndex;
                    const tbl = activeNode.parentElement.parentElement;
                    // set all td in all rows at colIndex to same alignment
                    for (let i = 0; i < tbl.rows.length; i++) {
                        tbl.rows[i].cells[colIndex].align = 'right';
                    }
                    editor.execCommand('mceToggleFormat', false, 'alignright');
                }
            },
            onPostRender: () => {
                toolbarButtons.colAlignRight = this;
            }
        });

        // Left align button
        editor.addButton('btnColAlignLeft', {
            icon: 'alignleft',
            tooltip: 'Left Align column',
            onclick: () => {
                const activeNode = editor.selection.getNode();
                if (activeNode.localName === 'td') {
                    const colIndex = activeNode.cellIndex;
                    const tbl = activeNode.parentElement.parentElement;
                    // set all td in all rows at colIndex to same alignment
                    for (let i = 0; i < tbl.rows.length; i++) {
                        tbl.rows[i].cells[colIndex].align = 'left';
                    }
                    editor.execCommand('mceToggleFormat', false, 'alignleft');
                }
            },
            onPostRender: () => {
                toolbarButtons.colAlignLeft = this;
            }
        });

        // Center align button
        editor.addButton('btnColAlignCenter', {
            icon: 'aligncenter',
            tooltip: 'Center Align column',
            onclick: () => {
                const activeNode = editor.selection.getNode();
                if (activeNode.localName === 'td') {
                    const colIndex = activeNode.cellIndex;
                    const tbl = activeNode.parentElement.parentElement;
                    // set all td in all rows at colIndex to same alignment
                    for (let i = 0; i < tbl.rows.length; i++) {
                        tbl.rows[i].cells[colIndex].align = 'center';
                    }
                    editor.execCommand('mceToggleFormat', false, 'aligncenter');
                }
            },
            onPostRender: () => {
                toolbarButtons.colAlignCenter = this;
            }
        });

        // endregion

    }

    /**
     * Perform tasks on node change in editor
     */
    private onEditorNodeChange(editor: any, e: any) {
        // #region: code tag rules
        if (e.parents.find((p) => (p.localName === 'code' || p.localName === 'pre'))) {
            this.toolbarButtons.bold.disabled(true);
            this.toolbarButtons.italic.disabled(true);
            this.toolbarButtons.strikethrough.disabled(true);

            this.modals['code'].data.node = e.element;
            this.modals['code'].data.code = $(e.element).text();
            let lang = e.element.attributes.class ? e.element.attributes.class.value : '';
            if (lang && lang.indexOf('language') > -1) {
                lang = lang.replace('language-', '');
                lang = lang === 'NA' ? '' : lang;
            } else {
                lang = '';
            }
            this.modals['code'].data.lang = lang;
        } else {
            this.toolbarButtons.bold.disabled(false);
            this.toolbarButtons.italic.disabled(false);
            this.toolbarButtons.strikethrough.disabled(false);
            this.modals['code'].data = {};
        }

        // #endregion

        // #region: table tag rules
        if (e.parents.find((p) => p.localName === 'table')) {
            // inside table --> hide bullet btns; show column alignment btns
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').hide(); // numlist, bullist
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(4)').hide(); // table
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(6)').hide(); // hr
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').show(); // col alignment
        } else {
            // outside table --> show bullet btns; hide column alignment btns
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(4)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(6)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();
        }
        // #endregion
    }

    /**
     * Emit editor changes to subscriber
     */
    private onEditorChange(editor: any) {
        const html = editor.getContent();
        this.zone.run(() => {
            this.markdownHtmlChange.emit(html);
        });
    }


    private openModel(key: string) {
        const thisModel = this.modals[key];
        if (thisModel) {
            this.zone.run(() => {
                this.openModal = thisModel;
            });
            $('#editor-modal').modal('show');
        }
    }

    private submitModel() {
        if (this.openModal.key === 'code') {
            if (this.openModal.data.node) {
                $(this.openModal.data.node).text((this.openModal.data.code || ''));
                $(this.openModal.data.node).removeAttr('class');
                $(this.openModal.data.node).addClass('language-' + (this.openModal.data.lang || ''));
            } else {
                const code = '<pre class="language-' + (this.openModal.data.lang || 'NA') + '">'
                    + (this.openModal.data.code || '') + '</pre> <br/>';
                console.log(code);
                this.addToEditor(code);
            }
            this.onEditorChange(this.editor);
        }

    }

    /**
     * Add content to the editor
     * @param content string to add to the editor
     */
    private addToEditor(content: string) {
        this.editor.insertContent(content);
    }


}
