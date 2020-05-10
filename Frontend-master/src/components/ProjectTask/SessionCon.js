import React, {Component} from 'react';

class SessionCon extends React.Component {
    constructor(props){
        super(props);
        console.log("check session");
        window.addEventListener('storage', (event) => {

            const credentials1 = JSON.parse(JSON.stringify(window.sessionStorage.getItem('sessionName')));
            const credentials2 = JSON.parse(JSON.stringify(window.sessionStorage.getItem('sessionPost')));

            //for logged in tab
            if(event.key === 'REQUESTING_SHARED_CREDENTIALS' && credentials1 !== null ) {
                window.localStorage.setItem('CREDENTIALS_SHARING1', JSON.stringify({  credentials1 }));
                window.localStorage.removeItem('CREDENTIALS_SHARING1');
                //console.log("if 1"+credentials1);
                window.localStorage.setItem('CREDENTIALS_SHARING2', JSON.stringify({ credentials2 }));
                window.localStorage.removeItem('CREDENTIALS_SHARING2');
                //console.log("if 2"+credentials2);
            }
            //for newly opened tab
            if(event.key === 'CREDENTIALS_SHARING1' && credentials1 === null){
                console.log("if 3"+credentials1);
               // var name=event.newValue;
                var obj = JSON.parse(event.newValue);
                window.sessionStorage.setItem('sessionName', obj.credentials1);

            }
            if(event.key === 'CREDENTIALS_SHARING2' && credentials2 === null){
                //console.log("if 4"+credentials2);
                var obj1 = JSON.parse(event.newValue);
                window.sessionStorage.setItem('sessionPost', obj1.credentials2);
                window.location.reload(false);
            }

            if(event.key === 'CREDENTIALS_FLUSH' && credentials1 !==null){
                console.log("logout session");
                window.sessionStorage.removeItem('sessionName');
                window.sessionStorage.removeItem('sessionPost');
                window.location.reload(false);

            }

        })
    }

    componentDidMount() {
        window.localStorage.setItem('REQUESTING_SHARED_CREDENTIALS', Date.now().toString())
        window.localStorage.removeItem('REQUESTING_SHARED_CREDENTIALS')
    }
    render() {
        return <div></div>;
    }
}
export default SessionCon;

