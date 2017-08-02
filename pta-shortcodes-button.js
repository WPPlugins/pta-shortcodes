(function() {
    tinymce.PluginManager.add('ssplugins_tc_button', function( editor, url ) {
        editor.addButton( 'ssplugins_tc_button', {
            text: 'PTA',
            title: 'Insert PTA Shortcode',
            type: 'menubutton',
            icon: false,
            menu: [
                {
                    text: 'Member Directory',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Arguments (leave blank to show all)',
                            body: [{
                                type: 'textbox',
                                name: 'position',
                                label: 'Position'
                            },
                            {
                                type: 'textbox',
                                name: 'location',
                                label: 'Location'
                            }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[pta_member_directory position="' + e.data.position + '" location="' + e.data.location + '"]');
                            }
                        });
                    }
                },
                {
                    text: 'MD Contact Form',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Arguments (leave blank to show all)',
                            body: [{
                                type: 'textbox',
                                name: 'position',
                                label: 'Position'
                            },
                            {
                                type: 'textbox',
                                name: 'location',
                                label: 'Location'
                            },
                            {
                                type: 'textbox',
                                name: 'id',
                                label: 'ID'
                            },
                            {
                                type: 'checkbox',
                                name: 'hide_select',
                                label: 'Hide Recipient Select Dropdown?'
                            }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[pta_member_contact position="' + e.data.position + '" location="' + e.data.location + '" id="' + e.data.id + '" hide_select="' + e.data.hide_select + '"]');
                            }
                        });
                    }
                },
                {
                    text: 'MD Admin Contact Form',
                    onclick: function() {
                            editor.insertContent( '[pta_admin_contact]');
                    }
                },
                {
                    text: 'Volunteer Sign-up Sheets',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Arguments (leave blank to show all)',
                            body: [{
                                type: 'textbox',
                                name: 'id',
                                label: 'Sheet ID'
                            },
                            {
                                type: 'textbox',
                                name: 'date',
                                label: 'Date (yyyy-mm-dd)'
                            },
                            {
                                type: 'textbox',
                                name: 'group',
                                label: 'Group (separate multiple groups with | )'
                            },
                            {
                                type: 'textbox',
                                name: 'list_title',
                                label: 'Sheet List Title'
                            },
                            {
                                type: 'listbox',
                                name: 'show_headers',
                                label: 'Show Sheet Headers (title, contacts, description)?',
                                'values': [
                                    {text: 'Yes', value: 'yes'},
                                    {text: 'No', value: 'no'}
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'show_time',
                                label: 'Show Task Times?',
                                'values': [
                                    {text: 'Yes', value: 'yes'},
                                    {text: 'No', value: 'no'}
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'show_phone',
                                label: 'Show Phone Numbers?',
                                'values': [
                                    {text: 'No', value: 'no'},
                                    {text: 'Yes', value: 'yes'}
                                ]
                            }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[pta_sign_up_sheet id="' + e.data.id + '" date="' + e.data.date + '" group="' + e.data.group + '" list_title="' + e.data.list_title + '" show_headers="' + e.data.show_headers + '" show_time="' + e.data.show_time + '" show_phone="' + e.data.show_phone + '"]');
                            }
                        });
                    }
                },
                {
                    text: 'Volunteer Calendar',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Arguments (leave blank to show all)',
                            body: [{
                                type: 'textbox',
                                name: 'calendar',
                                label: 'Calendar ID or Title'
                            },
                                {
                                    type: 'textbox',
                                    name: 'group',
                                    label: 'Group (separate multiple groups with | )'
                                }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( '[pta-calendar calendar="' + e.data.id + '" group="' + e.data.group + '"]');
                            }
                        });
                    }
                }
           ]
        });
    });
})();