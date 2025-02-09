import './styles.scss';
import 'jquery-ui-dist/jquery-ui.js'; // add full library for now ...

import {bioz_w_attach_message} from "./bioz-w-api.min.js";
import {v_widget_noiframe_obj} from "./v_widget.sino.js";
import {ci_widget_noiframe_obj} from "./v_widget.sino.js";
bioz_w_attach_message();
export {v_widget_noiframe_obj};
export {ci_widget_noiframe_obj};
