<template>
    <div>
        <div id="terminal" ref="terminal"></div>
        <div>{{sshStatus}}</div>
    </div>
</template>

<script>
    import {Terminal} from 'xterm';
    import "xterm/css/xterm.css"
    import "xterm/lib/xterm.js"
    import io from 'socket.io-client';

    export default {
        name: 'xtermDemo',
        props:{
            sshid: {
                type: String,
                default: '546518912354651023'
            }
        },
        data() {
            return {
                shellWs: '',
                term: '',
                rows: 40,
                cols: 100,
                sshStatus: ''
            }
        },
        methods: {
            initSocketClient() {
                let socket = io('http://192.168.1.102:9999/ssh-test?id=234234s')
                this.shellWs = socket;
                //连上ws服务后立即进行登陆操作
                socket.on('connect', ()=>{
                    socket.emit('login', {'ssh-id':this.sshid})
                    //socket.emit('setencoding', 'GB18030')
                })

                socket.on('loginAck', (data) => {
                    if(data.result == -1) {
                        console.log('login failed')
                    } else if(data.result == 1) {
                        console.log('login success')
                    }
                })
                socket.on('sshStatus', (message) => {
                    console.log(message)
                    this.sshStatus = message
                })
                socket.on('cmdResult', (result) => {
                    console.log(result)
                    this.term.write(new Uint8Array(result))
                })
            }

        },
        created() {
            this.initSocketClient();
        },
        mounted() {
            let _this = this;
            let term = new Terminal({
                rendererType: "canvas",
                rows: 20,
                cols: 100,
                convertEol: true,
                disableStdin: false,
                cursorStyle: "underline",
                cursorBlink: true,
                theme: {
                    foreground: "#7e9192",
                    background: '#002833',
                    cursor: "help",
                    lineHeight: 16
                }
            });
            term.open(this.$refs["terminal"]);

            function runFakeTerminal() {
                if(term._initialized) {
                    return;
                }
                term._initialized = true;

                term.onKey(e=>{
                    _this.shellWs.emit('sendtossh', e.key);
                });

            }
            _this.term = term;
            runFakeTerminal();
        }
    }
</script>