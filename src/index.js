import './styles.scss';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min.js';
import 'tooltipster/dist/js/tooltipster.bundle.min.js';
import 'twitter-typeahead-components-bundle';
import 'highcharts/highcharts';
import 'highcharts/highmaps'
import './jquery.simplePagination.js';
import './keyboard.js';

import {bioz_w_attach_message} from "./bioz-w-api-8.0.min.js";
import {v_widget_noiframe_obj} from "./v_widget-8.0.1.sino.js";
bioz_w_attach_message();
export {v_widget_noiframe_obj};