<script>
import { Link, Head } from "@inertiajs/vue3";
import getChartColorsArray from "@/common/getChartColorsArray";
import { layoutComputed } from "@/state/helpers.js";
import { geenergiaComputed } from "@/state/helpers.js";
import { geenergiaMethods } from "@/state/helpers.js";

import { CountTo } from "vue3-count-to";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "@/Layouts/main.vue";

import CardHeader from "@/common/card-header.vue";

export default {
  components: {
    CountTo,
    Layout,
    Swiper,
    SwiperSlide,
    flatPickr,
    Link,
    Head,
    CardHeader,
  },
  data() {
    return {
      simulationLengthError: false,
    };
  },
  methods: {
   

    ...geenergiaMethods,

    // updateSimulationLength(event) {
    //   this.changeSimulationLength(event);
      
    // },
    updateSimulationLength(event) {
      const value = parseFloat(event);
      this.simulationLengthError = isNaN(value) || value < 1;
      if (!this.simulationLengthError) {
        this.changeSimulationLength(value);
      }
    },

    handleUpdate() {
      setTimeout(() => {
        switch (this.layoutTheme) {
          case "default":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "saas":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "corporate":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "galaxy":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
              ),
            };
            break;
          case "material":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "creative":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "minimal":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
              ),
            };
            break;
          case "modern":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "interactive":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.45"]'
              ),
            };
            break;
          case "classic":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
          case "vintage":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray(
                '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
              ),
            };
            break;
        }
      }, 200);
    },
  },
  mounted() {
    // window.addEventListener("resize", this.resizerightcolumn);
    // this.handleUpdate();
  },
  computed: {
    //GEENERGIA STORE
    ...geenergiaComputed,

    //-----------------------------------------------------------------------
    ...layoutComputed,
    layoutTheme() {
      return this.$store ? this.$store.state.layout.layoutTheme : {} || {};
    },
  },
  watch: {
    layoutTheme() {
      this.handleUpdate();
    },
  },
};
</script>

<template>
  <Layout>
    <Head title="Meteo" />
    <BRow>
      <BCol>
        <div class="h-100">
          <BRow class="mb-3 pb-1">
            <BCol cols="12">
              <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                <div class="flex-grow-1">
                  <h4 class="fs-16 mb-1 ri-sun-cloudy-line">METEO</h4>
                </div>
              </div>
            </BCol>
          </BRow>

          <BRow>
            <BCol xxl="12">
              <BCard no-body>
                <CardHeader title="Simulation settings" />

                <BCardBody>
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Simulation length [N years]</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                            type="text"
                            class="form-control"
                            id="simulationlength"
                            @input="updateSimulationLength"
                            v-model="simulationLength"
                            :class="{ 'is-invalid': simulationLengthError }"
                          />
                          <BFormInvalidFeedback v-if="simulationLengthError">
                            The value must be 1 or greater.
                          </BFormInvalidFeedback>
                        </BCol>
                        <BCol lg="3">
                          <p>Value must be >=1</p>
                        </BCol>
                      </BRow>
                      <BRow class="mb-3">
                        <BCol lg="3">
                          <label for="nameInput" class="form-label"
                            >Time-step [-]:</label
                          >
                        </BCol>
                        <BCol lg="1">
                          <BFormInput
                            type="text"
                            class="form-control"
                            id="timestep"
                            placeholder=" 15 Min"
                            readonly
                          />
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
          <BRow>
            <BCol xxl="12">
              <BCard no-body>
                <CardHeader title="Meteo file" />

                <BCardBody>
                  <p class="text-muted">
                    Expected file length: 35040 intervals (1 year)
                  </p>
                  <div class="live-preview">
                    <BForm action="javascript:void(0);">
                      <BRow class="mb-6">
                        <BCol lg="6">
                          <div class="input-group">
                            <input
                              type="file"
                              class="form-control"
                              id="meteofile"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              placeholder="No file selected"
                            />
                            <BButton
                              variant="outline-success"
                              type="button"
                              id="inputGroupFileAddon04"
                              >Import</BButton
                            >
                          </div>
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>