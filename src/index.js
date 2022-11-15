"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import timer from "./modules/timer";
import sendForm from "./modules/sendForm";
import formValid from './modules/formValid.js';

sliders();
modals();
timer("20 november 2022");
formValid();

sendForm({
    formName: "action-form",
});

sendForm({
    formName: "action-form2",
});