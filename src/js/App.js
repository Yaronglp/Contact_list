import {Component} from 'react';
import MainBox from './components/member/MainBox';
import MemberList from './components/member/MemberList';
import AddMemberModal from './components/modal/AddMemberModal';
import DelMemberModal from './components/modal/DelMemberModal';
import MembersProvider from "./components/member/MembersProvider";
import AddRemoveMember from "./components/member/AddRemoveMember";

const LOCAL_STORAGE_KEY = 'contact_members';

export default class App extends Component{

    constructor(){
        super();
        this.state = {
          members:[],
          currMemberIndex:0,
          showAddMemberCmp:false,
          showDelMemberCmp:false
        };
        this.forwardToWebsite = this.forwardToWebsite.bind(this);
        this.changeMemberClickHandler = this.changeMemberClickHandler.bind(this);
    }

    updateLocalStorage(members){
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(members));
    }

    componentWillMount(){
        let savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);

        this.setState({
            members: savedContacts ? JSON.parse(savedContacts) : MembersProvider
        });
    }

    addMemberModal(e){
        e.stopPropagation();

        this.setState({
            showAddMemberCmp:true
        });
    }

    removeMemberModal(e){
        if(this.state.members.length > 1) {
            e.stopPropagation();

            this.setState({
                showDelMemberCmp: true
            });
        }
    }

    removeMemberFromList(){
        const {members, currMemberIndex} = this.state;

        if(members.length > 1) {
            let tempMem = members.slice();
            let currInd = currMemberIndex;

            // Delete current member
            tempMem.splice(currMemberIndex, 1);

            this.updateLocalStorage(tempMem);

            this.setState({
                members: tempMem,
                showDelMemberCmp:false,
                currMemberIndex: (currInd === members.length - 1) ? --currInd : currInd
            });

            tempMem = null;
        }
    }

    addMemberToList(config){
        let members = [
            ...this.state.members,
            config
        ];

        this.updateLocalStorage(members);

        this.setState({
            members,
            showAddMemberCmp:false
        });
    }

    closeModal(){
        this.setState({
            showAddMemberCmp:false,
            showDelMemberCmp:false
        });
    }

    forwardToWebsite(property){
        const {members, currMemberIndex} = this.state;

        window.open(members[currMemberIndex][property]);
    }

    changeMemberClickHandler(newIndex){
       this.setState({
           currMemberIndex: newIndex
       });
    }

    render(){
        const {members, currMemberIndex, showAddMemberCmp, showDelMemberCmp} = this.state;
        const {picture, fullname, email,phoneNumber, title, linkedin, facebook} = members[currMemberIndex];

        return (
            <React.Fragment>
                {!showDelMemberCmp && !showAddMemberCmp ?
                    <div id="app_content" className="main_wrapper">
                        <MainBox picture={picture}
                                 fullname={fullname}
                                 email={email}
                                 phoneNumber={phoneNumber}
                                 title={title}
                                 forwardFn={this.forwardToWebsite}
                                 linkedin={linkedin}
                                 facebook={facebook}/>
                        <MemberList members={members}
                                    currMemberIndex={currMemberIndex}
                                    clickHandler={this.changeMemberClickHandler}/>
                        <AddRemoveMember handleAddClick={(e) => this.addMemberModal(e)}
                                         handleRmvClick={(e) => this.removeMemberModal(e)}
                                         permitToRemove={members.length > 1}/>
                    </div> :
                    showAddMemberCmp ?
                    <AddMemberModal clickHandler={(config) => this.addMemberToList(config)}
                                    closeHandler={() => this.closeModal()}/> :
                    <DelMemberModal clickHandler={() => this.removeMemberFromList()}
                                    closeHandler={() => this.closeModal()}
                                    member={members[currMemberIndex]}/>}
            </React.Fragment>
        );
    }
}