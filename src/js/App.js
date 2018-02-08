import {Component} from 'react';
import MainBox from './components/member/MainBox';
import MemberList from './components/member/MemberList';
import AddOrEditMemberModal from './components/modal/AddOrEditMemberModal';
import DelMemberModal from './components/modal/DelMemberModal';
import MembersProvider from "./components/member/MembersProvider";
import CrudMemberIcons from "./components/member/CrudMemberIcons";

const LOCAL_STORAGE_KEY = 'contact_members';

export default class App extends Component{

    constructor(){
        super();
        this.state = {
          members:[],
          currMemberIndex:0,
          showAddOrEditMemberCmp:false,
          showDelMemberCmp:false,
          editMemberCmp:false
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

    addEditMemberModal(e, isEdit){
        e.stopPropagation();

        this.setState({
            showAddOrEditMemberCmp:true,
            editMemberCmp:isEdit
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
        let {editMemberCmp, members, currMemberIndex} = this.state;

        if(editMemberCmp){
            members.splice(currMemberIndex, 1);
            members.splice(currMemberIndex, 0, config);
        }else{
            members = [...members, config];
        }

        this.updateLocalStorage(members);

        this.setState({
            members,
            showAddOrEditMemberCmp:false,
            editMemberCmp:false,
        });
    }

    closeModal(){
        this.setState({
            showAddOrEditMemberCmp:false,
            showDelMemberCmp:false,
            editMemberCmp:false
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
        const {members, currMemberIndex, showAddOrEditMemberCmp, showDelMemberCmp, editMemberCmp} = this.state;
        const {picture, fullname, email,phoneNumber, title, linkedin, facebook} = members[currMemberIndex];

        return (
            <React.Fragment>
                {!showDelMemberCmp && !showAddOrEditMemberCmp ?
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
                        <CrudMemberIcons handleAddClick={(e) => this.addEditMemberModal(e, false)}
                                         handleEditClick={(e) => this.addEditMemberModal(e, true)}
                                         handleRmvClick={(e) => this.removeMemberModal(e)}
                                         permitToRemove={members.length > 1}/>
                    </div> :
                    showAddOrEditMemberCmp ?
                    <AddOrEditMemberModal clickHandler={(config) => this.addMemberToList(config)}
                                          closeHandler={() => this.closeModal()}
                                          isEditMember={editMemberCmp}
                                          member={members[currMemberIndex]}/> :
                    <DelMemberModal clickHandler={() => this.removeMemberFromList()}
                                    closeHandler={() => this.closeModal()}
                                    member={members[currMemberIndex]}/>}
            </React.Fragment>
        );
    }
}