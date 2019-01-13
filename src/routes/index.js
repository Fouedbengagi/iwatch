import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "../component/Index";
import Service from "../component/service/service";
import Login from "../component/login/Login"
import Api from "../component/api/api";
import Map from "../component/map/Map";
import Statistiques from "../component/statistiques/statistiques";
import reclamations from "../component/reclamations/reclamations";
import Clustering from "../component/clustring/Clustering";

export default () => (

	<Switch>
		<Route path="/" exact component={Index} />
		<Route path="/service" exact component={Service} />
		<Route path="/reclamations" exact component={reclamations} />
		<Route path="/map" exact component={Map} />
		<Route path="/api" exact component={Api} />
		<Route path="/statistiques" exact component={Statistiques} />
		<Route path="/login" exact component={Login} />
		<Route path="/clustering" exact component={Clustering} />
	</Switch>

);