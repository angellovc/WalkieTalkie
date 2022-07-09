import blessed, {Widgets} from 'blessed';

class ChatScreen {
    
    screen:Widgets.Screen;
    input:Widgets.TextareaElement;
    channel:Widgets.MessageElement;
    chat:Widgets.ListElement;
    onEnter:undefined|((input:string) => string);

    constructor(channel:string, onEnter:undefined|((input:string) => string) = undefined) {
        this.onEnter = onEnter;
        this.screen = this.getScreen();
        // Initializing Chat elements
        this.chat = this.getChat();
        this.chat.addItem('');
        this.channel = this.getChannel(channel);
        this.input = this.getInput();
        // Attaching chat elements to the screen
        this.screen.append(this.input);
        this.screen.append(this.channel);
        this.screen.append(this.chat);
        // Putting the cursor on the chat input
        this.input.focus();
        // Rendering
        this.render();
    }

    public initialize():void {

    }

    public newMessage(message:string):void {
        this.chat.addItem(message);
        this.chat.scrollTo(100);
        this.render();
    }


    public render():void {
        this.screen.render();
    }

    private getScreen():Widgets.Screen {
        return blessed.screen({
            smartCSR: true,
        });
    }

    private getChat():Widgets.ListElement {
         const chat = blessed.list({
            align: 'left',
            mouse: true,
            width: '100%',
            height: '60%',
            position: {
                bottom: 5,
                left: 0,
                right: 0,
                top: 2
            },
            border: {
                type: 'line',
                
            },
            scrollable: true,
            padding: {
              bottom: 1,
              left: 1,
            },
            scrollbar: {
                track: true,
                style: {
                    bg: 'yellow',
                }
            },
            items: [],
          });




        return chat;
    
    }

    private getChannel(channel:string):Widgets.MessageElement {
        return blessed.message({
            content: `Channel code: | ${channel} | Share the code to the people to access this chat channel `,
            with: '100%',
            height: '5%',
            align: 'center',
            valign: 'bottom'
        });
    }


    

    private getInput():Widgets.TextareaElement {
        const input = blessed.textarea({
            bottom: 0,
            height: '10%',
            inputOnFocus: true,
            padding: {
                left: 2,
                
            },
            style: {
                border: {
                    fg: '#b1b1b1'
                  },
            },
            border: {
                type: 'line',
            },
          },
        );

        input.key(['escape', 'C-c'], function() {
            return process.exit(0);
        });

        input.key('enter', (data:any) => {
            const message = input.getValue().trim();
            if (message.length === 0) {
                input.clearValue();
                return;
            }
            if (this.onEnter === undefined) {
                this.newMessage(message);
            } else {
                const response:string = this.onEnter(message);
                this.newMessage(
                    response
                );
            }
            input.clearValue();
            this.render();
        });

        return input;
    }

}


export default ChatScreen;
