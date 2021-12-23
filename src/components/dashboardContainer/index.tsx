import React from "react";
import { MenuDashboard } from "components/MenuDashboard";
import { Tabs } from "react-tabs";

export class DashboardContainer extends React.Component {
    render() {
        return (

            <Tabs>
                <MenuDashboard />
            </Tabs>
        );
    }
}