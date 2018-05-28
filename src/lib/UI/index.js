//import * as BS from "reactstrap";

import * as Bloomer from "bloomer";

//import MenuBar from "./MenuBar";
import Tabs from "./Tabs";
import Windows from "./Windows";
import Timers from "./Timers";

import Markdown from "./Markdown";
import Stepper from "./Stepper";
import Loading from "./Loading";
import TagCloud from "./TagCloud";
import * as Icons from "./Icons";

import * as Pages from "./Pages";

import * as ShareButtons from "./ShareButtons";



const components = {
    ...Bloomer,
    ...Icons,
    ...ShareButtons,
    ...Tabs,
    ...Windows,
    ...Timers,
    //MenuBar,
    Markdown,
    Stepper,
    //BS,
    Loading,
    TagCloud,
    ...Pages
};


console.log(components)

export default components;