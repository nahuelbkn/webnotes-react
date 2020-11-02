import React from "react";

export default class NavBar extends React.Component
{
    render()
    {
        const { title } = this.props;
        return (
            <nav className="navbar navbar-dark bg-dark">{`${title[0].toUpperCase()}${title.slice(1).toLowerCase()}`}</nav>
        )
    }
}