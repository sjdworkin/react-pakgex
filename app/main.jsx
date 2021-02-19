import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import { TreeView } from '@progress/kendo-react-treeview';

//import agendaContent from './agenda.json';
import xyz from "./agenda.json"

const agendaContent2 = xyz;

const agendaContent = 
{
  Title: "PRC 11/19/20",
  TOC: [
    {
      Title: "AgendaX"
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
      Title: "OIFP & DOH REFERRALS",
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
                data={agendaContent.TOC}
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