import axios from "axios";

const state = {
    simulationLength: '1',
    pvModuleSelected: '0',
    inverterSelected: '0',
    trackingStrategySelected: '0',
    shadingModelSelected: '0',
    degradationYear: '1',
    maxCapacity: '',
    initialSoc: '',
    dispatchStrategySelected: '0',
    auxiliarylossesSelected: '1',





};

const getters = {

};

const mutations = {
    CHANGE_SIMULATIONLENGTH(state, value) {
        state.simulationLength = value;

    },
    CHANGE_PVMODULESELECTED(state, value) {
        state.pvModuleSelected = value;

    },
    CHANGE_INVERTERSELECTED(state, value) {
        state.inverterSelected = value;

    },
    CHANGE_TRACKINGSTRATEGYSELECTED(state, value) {
        state.trackingStrategySelected = value;

    },
    CHANGE_SHADINGMODELSELECTED(state, value) {
        state.shadingModelSelected = value;

    },
    CHANGE_DEGRADATIONYEAR(state, value) {
        state.degradationYear = value;

    },
    CHANGE_MAXCAPACITY(state, value) {
        state.maxCapacity = value;

    },
    CHANGE_INITIALSOC(state, value) {
        state.initialSoc = value;

    },
    CHANGE_DISPATCHSTRATEGYSELECTED(state, value) {
        state.dispatchStrategySelected = value;

    },
    CHANGE_AUXILIARYLOSSESSELECTED(state, value) {
        state.auxiliarylossesSelected = value;

    },
};

const actions = {

    changeSimulationLength({ commit },  simulationLength ) {
        console.log(simulationLength)
        commit('CHANGE_SIMULATIONLENGTH', simulationLength);
    },
    changepvModuleSelected({ commit },  pvModuleSelected ) {
        commit('CHANGE_PVMODULESELECTED', pvModuleSelected);
    },
    changeinvertedSelected({ commit },  inverterSelected ) {
        commit('CHANGE_INVERTERSELECTED', inverterSelected);
    },
    changetrackingStrategySelected({ commit },  trackingStrategySelected ) {
        commit('CHANGE_TRACKINGSTRATEGYSELECTED', trackingStrategySelected);
    },
    changeshadingModelSelected({ commit },  shadingModelSelected ) {
        commit('CHANGE_SHADINGMODELSELECTED', shadingModelSelected);
    },
    changedegradationYear({ commit },  degradationYear ) {
        commit('CHANGE_DEGRADATIONYEAR', degradationYear);
    },
    changemaxCapacity({ commit },  maxCapacity ) {
        commit('CHANGE_MAXCAPACITY', maxCapacity);
    },
    changeinitialSoc({ commit },  initialSoc ) {
        commit('CHANGE_INITIALSOC', initialSoc);
    },
    changedispatchStrategySelected({ commit },  dispatchStrategySelected ) {
        commit('CHANGE_DISPATCHSTRATEGYSELECTED', dispatchStrategySelected);
    },
    changedauxiliarylossesSelected({ commit },  auxiliarylossesSelected ) {
        commit('CHANGE_AUXILIARYLOSSESSELECTED', auxiliarylossesSelected);
    },


};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};