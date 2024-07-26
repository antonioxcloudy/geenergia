import { mapState, mapActions } from 'vuex'

export const layoutComputed = {
  ...mapState('layout', {
    layoutType: (state) => state.layoutType,
    sidebarSize: (state) => state.sidebarSize,
    layoutWidth: (state) => state.layoutWidth,
    topbar: (state) => state.topbar,
    mode: (state) => state.mode,
    position: (state) => state.position,
    sidebarView: (state) => state.sidebarView,
    sidebarColor: (state) => state.sidebarColor,
    sidebarImage: (state) => state.sidebarImage,
    visibility: (state) => state.visibility,
    bodybg: (state) => state.bodybg,
    layoutTheme: (state) => state.layoutTheme,
    themeColor: (state) => state.themeColor,
  })
}

export const layoutMethods = mapActions('layout',
  ['changeLayoutType', 'changeLayoutWidth', 'changeSidebarSize', 'changeTopbar', 'changeMode', 'changePosition', 'changeSidebarView',
    'changeSidebarColor', 'changeSidebarImage', 'changePreloader', 'changeVisibility', 'changeBodybg', 'changeThemes', 'changeThemesColor'])

export const notificationMethods = mapActions('notification', ['success', 'error', 'clear'])



export const geenergiaComputed = {
  ...mapState('geenergia', {
    simulationLength: (state) => state.simulationLength,
    pvModuleSelected: (state) => state.pvModuleSelected,
    inverterSelected: (state) => state.inverterSelected,
    trackingStrategySelected: (state) => state.trackingStrategySelected,
    shadingModelSelected: (state) => state.shadingModelSelected,
    degradationYear: (state) => state.degradationYear,
    maxCapacity: (state) => state.maxCapacity,
    initialSoc: (state) => state.initialSoc,
    dispatchStrategySelected: (state) => state.dispatchStrategySelected,
    auxiliarylossesSelected: (state) => state.auxiliarylossesSelected,

   
  })
}

export const geenergiaMethods = mapActions('geenergia', ['changeSimulationLength','changepvModuleSelected','changeinvertedSelected','changetrackingStrategySelected',
'changeshadingModelSelected','changedegradationYear','changemaxCapacity','changeinitialSoc','changedispatchStrategySelected','changedauxiliarylossesSelected'])


export const todoComputed = {
  ...mapState('todo', {
    todos: (state) => state.todos
  })
}
export const todoMethods = mapActions('todo', ['fetchTodos'])