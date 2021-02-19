import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { TreeView } from '@progress/kendo-react-treeview';

const agendaContent2 =
{"ID":2058,"Title":"PRC 11/19/20","Description":"","MeetingDate":"11/19/2020","NewMeetingDate":"","Location":"","TOC":[{"ID":1,"Title":"Agenda","Description":"","Sequence":1,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":1,"AgendaDocumentID":1,"Agenda":2058,"TOC":1,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"001-918f38e8d6324b47a1921cc665768886.pdf"}]},{"ID":2,"Title":"ENFORCEMENT BUREAU REPORTS/ADMINISTRATIVE OFFICE ITEMS","Description":"","Sequence":2,"IsExpanded":true,"items":[{"ID":3,"Title":"Collin, Robert D 25MA04353300 Complaint MED-2019-06581","Description":"","Sequence":3,"IsExpanded":true,"items":[{"ID":4,"Title":"EB Report","Description":"","Sequence":4,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":2,"AgendaDocumentID":2,"Agenda":2058,"TOC":2,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"002-a33922cdc0214202ac9f8e7930cd1247.PDF"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":5,"Title":"Schneider, Barbara P 25MA04557600","Description":"","Sequence":5,"IsExpanded":true,"items":[{"ID":6,"Title":"EB Report","Description":"","Sequence":6,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":3,"AgendaDocumentID":3,"Agenda":2058,"TOC":3,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"003-f855963854b94c2d935e5bdd0fac0345.PDF"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":7,"Title":"OIFP & DOH REFERRALS","Description":"","Sequence":7,"IsExpanded":true,"items":[{"ID":8,"Title":"Nothing Scheduled","Description":"","Sequence":8,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":9,"Title":"SURGICAL PRACTICES/INSPECTIONS","Description":"","Sequence":9,"IsExpanded":true,"items":[{"ID":10,"Title":"Nothing Scheduled","Description":"","Sequence":10,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":11,"Title":"PENDING OR BOARD OR OTHER ACTION","Description":"","Sequence":11,"IsExpanded":true,"items":[{"ID":12,"Title":"Garcia, Julia G. 25MA07470500","Description":"","Sequence":12,"IsExpanded":true,"items":[{"ID":13,"Title":"DAG Memo","Description":"","Sequence":13,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":4,"AgendaDocumentID":4,"Agenda":2058,"TOC":4,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"004-da8fdc8fc8a241e0bcce0f510c82470e.pdf"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":14,"Title":"Kapoor, Anil 25MA04714900","Description":"","Sequence":14,"IsExpanded":true,"items":[{"ID":15,"Title":"DAG Memo","Description":"","Sequence":15,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":5,"AgendaDocumentID":5,"Agenda":2058,"TOC":5,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"005-a33edcce8b854ff3b556b372a5ae5163.pdf"}]},{"ID":16,"Title":"Certification","Description":"","Sequence":16,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":6,"AgendaDocumentID":6,"Agenda":2058,"TOC":6,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"006-da7b3ae193f64e7086e1c309b7f97b29.pdf"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":17,"Title":"Lu, Kang 25MA09063500  Complaint MED-2019-02915 ","Description":"","Sequence":17,"IsExpanded":true,"items":[{"ID":18,"Title":"DAG memo","Description":"","Sequence":18,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":7,"AgendaDocumentID":7,"Agenda":2058,"TOC":7,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"007-46ec84169c1d46ed8cfa0dcf979b421e.pdf"}]},{"ID":19,"Title":"MA Partial Final Decision","Description":"","Sequence":19,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":8,"AgendaDocumentID":8,"Agenda":2058,"TOC":8,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"008-f8991c0a25fe45128b3fe76bc4c74b72.pdf"}]},{"ID":20,"Title":"MA Final Decision and Order","Description":"","Sequence":20,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":9,"AgendaDocumentID":9,"Agenda":2058,"TOC":9,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"009-2899e24cc4774b1f8c83b28ca553935e.pdf"}]},{"ID":21,"Title":"MA DALA Recommended Decision","Description":"","Sequence":21,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":10,"AgendaDocumentID":10,"Agenda":2058,"TOC":10,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"010-357d79c9ec4f46c88cd4af4893525b1a.pdf"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":22,"Title":"NOAR, MARK D 25MA04986100","Description":"","Sequence":22,"IsExpanded":true,"items":[{"ID":23,"Title":"DAG Memo","Description":"","Sequence":23,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":11,"AgendaDocumentID":11,"Agenda":2058,"TOC":11,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"011-52ef8880b08443a4b52ce0ffc145d629.pdf"}]},{"ID":24,"Title":"MD Mar 2019 Order","Description":"","Sequence":24,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":12,"AgendaDocumentID":12,"Agenda":2058,"TOC":12,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"012-6c7bb2b6226040ebbba70101721eab0d.PDF"}]},{"ID":25,"Title":"MD Jan 2019 Order","Description":"","Sequence":25,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":13,"AgendaDocumentID":13,"Agenda":2058,"TOC":13,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"013-16be334a176d4eab83355f3b15e2ceea.PDF"}]},{"ID":26,"Title":"Consent Order Reprimand May 2017","Description":"","Sequence":26,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":14,"AgendaDocumentID":14,"Agenda":2058,"TOC":14,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"014-202f7a049c9c413e8f14985eb7bb1424.pdf"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]},{"ID":27,"Title":"ZHOU, LINQIU  25MA07777400 Complaint MED-2018-10845 ","Description":"","Sequence":27,"IsExpanded":true,"items":[{"ID":28,"Title":"PEC Minutes","Description":"","Sequence":28,"IsExpanded":true,"items":[],"HasDocuments":false,"IsShared":true,"TOCDocuments":[{"ID":15,"AgendaDocumentID":15,"Agenda":2058,"TOC":15,"FolderPath":"","CheckoutUser":"","CurrentVersion":1,"Title":"015-952798a19fe5490cbfaa7d4a0037d6c7.pdf"}]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]}],"HasDocuments":false,"IsShared":true,"TOCDocuments":[]}]}
;


const agendaContent = 
{
  Title: "PRC 11/19/20",
  TOC: [
    {
      Title: "Agenda"
    },
    {
      Title: "ENFORCEMENT BUREAU REPORTS/ADMINISTRATIVE OFFICE ITEMS",
      expanded: true,
      items: [
        {
          Title: "Collin, Robert D 25MA04353300",
          items: [{ Title: "EB Report" }]
        },
        {
          Title: "Schneider, Barbara P 25MA04557600",
          items: [{ Title: "EB Report" }]
        }
      ]
    },
    {
      Title: "Decor",
      items: [
        { Title: "Bed Linen" },
        { Title: "Curtains & Blinds" },
        { Title: "Carpets" }
      ]
    }
  ]
};

const StyledTree1 = styled(TreeView)`background-color: yellow; font-size: 1.5em`;

class AgendaView extends React.Component {
    render() {
        return (
            <StyledTree1
                data={agendaContent2.TOC}
                textField='Title'
                expandIcons={true}
                onExpandChange={this.onExpandChange}
                onItemClick={this.onItemClick}
                aria-multiselectable={true}
            />
        );
    }
    onItemClick = (event) => {
        event.item.selected = !event.item.selected;
        //this.forceUpdate();
    }
    onExpandChange = (event) => {
        event.item.expanded = !event.item.expanded;
        //this.forceUpdate();
    }
}

ReactDOM.render(
    <AgendaView />,
    document.querySelector('my-app')
);