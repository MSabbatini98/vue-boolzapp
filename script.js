var vue_box = new Vue (
    {
        el : "#vue_box",
        data :{

            contacts: [ 
                {
                    name: 'Tommaso',
                    id : 0,
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai lorem loremweòkldjfs.n,v  a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di zvbxcfsdxcvsb<bfxc dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutdsfzcvxs<dzfxvto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Michele',
                    id : 1,
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    id : 2,
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    id : 3,
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    id : 4,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                
            ],
            recording : false,
            new_message: [],
            isActive : false,
            user_id : 0,

        },
        methods: {
            selectItem(el){
                // console.log(this.user_id)
                this.user_id = el.id;
                // console.log(el.id)

            },
            insertNewMessage(textinput){
                const object = { 
                    // todo use DynamicsCompressorNode.js to get time of day
                    
                    date: "5.45", 
                    message: textinput, 
                    status: "sent"
                };
                 console.log(textinput);
                // console.log(this.user_id);
                this.contacts[this.user_id].messages.push(object);
                this.new_message="";
            }
        }
        // methods : {
            
            
            
        // },
        // computed : {

        // }
    }
);
// alert("HEllo");   