import React from 'react';
import { SidebarOption } from "./SidebarOption";
import  Twitter  from '@material-ui/icons/Twitter';
import { Home } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import { NotificationsNone } from '@material-ui/icons';
import { Message } from '@material-ui/icons';
import  Bookmark  from '@material-ui/icons/BookmarkBorderOutlined';
import List from '@material-ui/icons/ListAlt';
import Person from '@material-ui/icons/PermIdentity';
import More from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import './../css/sidebar.css'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={Message} text="Messages" />
            <SidebarOption Icon={Bookmark} text="Bookmarks" />
            <SidebarOption Icon={List} text="Lists" />
            <SidebarOption Icon={Person} text="Profile" />
            <SidebarOption Icon={More} text="More" />

         <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
        </div>
    )
}
