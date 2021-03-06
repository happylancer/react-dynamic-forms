/**
 *  Copyright (c) 2017, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { sidebarStyle, sidebarItemStyle, sidebarTitleStyle } from "./styles";
import { AutoAffix } from "react-overlays";

export default class extends Component {
    render() {
        return (
            <div className="scrollable" style={sidebarStyle}>
                <div className="sidebar-heading" style={sidebarTitleStyle}>
                    GUIDE
                </div>
                <ul className="nav nav-sidebar" style={sidebarItemStyle}>
                    <li>
                        <Link to="/guide/intro">Introduction</Link>
                    </li>
                    <li>
                        <Link to="/guide/start">Getting Started</Link>
                    </li>
                </ul>

                <div className="sidebar-heading" style={sidebarTitleStyle}>
                    Examples
                </div>
                <ul className="nav nav-sidebar" style={sidebarItemStyle}>
                    <li>
                        <Link to="/example/form">Basic form</Link>
                    </li>
                    <li>
                        <Link to="/example/dynamic">Dynamic form</Link>
                    </li>
                    <li>
                        <Link to="/example/list">List example</Link>
                    </li>
                    <li>
                        <Link to="/example/schema">Schema example</Link>
                    </li>
                </ul>

                <div className="sidebar-heading" style={sidebarTitleStyle}>
                    API
                </div>
                <ul className="nav nav-sidebar" style={sidebarItemStyle}>
                    <li>
                        <Link to="/api/forms/CheckBoxes">CheckBoxes</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/Chooser">Chooser</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/DateEdit">DateEdit</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/Field">Field</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/Form">Form</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/List">List</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/RadioButtons">RadioButtons</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/Schema">Schema</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/TagsEdit">TagsEdit</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/TextArea">TextArea</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/TextEdit">TextEdit</Link>
                    </li>
                    <li>
                        <Link to="/api/forms/View">View</Link>
                    </li>
                </ul>

                <div className="sidebar-heading" style={sidebarTitleStyle}>
                    Links
                </div>
                <ul className="nav nav-sidebar" style={sidebarItemStyle}>
                    <li>
                        <a href="https://github.com/esnet/react-dynamic-forms" target="__blank__">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.es.net/" target="__blank__">ESnet</a>
                    </li>
                    <li>
                        <a href="http://software.es.net/" target="__blank__">Open Source</a>
                    </li>
                </ul>

                <div className="sidebar-heading" style={sidebarTitleStyle}>
                    Related Projects
                </div>
                <ul className="nav nav-sidebar" style={sidebarItemStyle}>
                    <li>
                        <a href="http://software.es.net/pond/" target="__blank__">pond.js</a>
                    </li>
                    <li>
                        <a href="http://software.es.net/react-network-diagrams/" target="__blank__">
                            Network Diagrams
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
