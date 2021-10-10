import { addThemeListener } from './theme.js';
import { addNavMenuListener, addNavListener, addScrollListener } from './header.js';
import { addFormListener } from './form.js';
import { addListenerToBackButton, addListenerToForwardButton } from './tracks.js';
import {
  addBicyclesMenuListener,
  addBicyclesMunuButtonListener,
  addTouchListeners,
} from './bicycles.js';

addThemeListener();
addNavMenuListener();
addNavListener();
addBicyclesMenuListener();
addBicyclesMunuButtonListener();
addScrollListener();
addFormListener();
addListenerToBackButton();
addListenerToForwardButton();
addTouchListeners();
