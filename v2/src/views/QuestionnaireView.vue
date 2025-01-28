<template>
    <div :id="'questionnaire-' + currentTask + '-view'" class="left-right-padding bottom-buttons-page">
        <div class="scroll-style top-bottom-padding">
            <ConfettiExplosion :particleCount="200" :duration="2000" />
            <h1 class="title">{{ currentTaskTitle }} evaluation</h1>
            <div class="description-box">
                <p class="description">
                    <em>Congratulations! Thank you for taking the time to finish the task.</em>
                    <br><br>
                    Now we would like to ask you to spare a moment and fill out the questionnaire below.
                    <br><br>
                    Please evaluate the following <em>statements</em> and <em>questions</em> on a scale from <em>1 to
                        7</em> based on your perception and experience during the task.
                </p>
            </div>
            <!--<p class="likert-questions-title">
                Please evaluate the following <em>statements</em> and <em>questions</em> on a scale from <em>1 to
                    7</em>:
            </p>-->
            <LikertScale v-for="(question, index) in dpCharacteristicsQuestions" :key="index"
                :name="'characteristics-tlx-' + question.category" :bottom-line="true" v-model="question.rating">
                {{ question.text }}
            </LikertScale>
            <LikertScale v-for="(question, index) in nasaTlxQuestions" :key="index"
                :name="'nasa-tlx-' + question.category" :bottom-line="true" :size="7" start="Very low" end="Very high"
                v-model="question.rating">
                {{ question.text }}
            </LikertScale>
            <div class="deceptive-strategies-row">
                <div class="description-box">
                    <p class="description">
                        <em>Deceptive design strategies</em> can be described as "user interface design choices that
                        benefit an online service by coercing, steering, or deceiving users into making decisions that,
                        if fully informed and capable of selecting alternatives, they might not make."
                        <br><br>
                        Please select <em>one</em> of the options for the next <em>question</em>, based on your
                        thoughts.
                    </p>
                </div>
                <label class="deceptive-strategies-question">Did you notice any deceptive design strategies during the
                    previous task?</label>
                <div class="radio-button-box">
                    <ul class="radio-button-list">
                        <li class="radio-button-item" v-for="option in deceptiveStrategiesOptions">
                            <input class="radio-button" type="radio" :value="option" v-model="deceptiveStrategies">
                            <label class="radio-button-text">{{ option }}</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-buttons-wrapper">
            <MyButton @click="onNext" :disabled="!questionnaireComplete()">Next</MyButton>
        </div>
    </div>
</template>


<script setup lang="ts">
import ConfettiExplosion from "@/components/ConfettiExplosion.vue";
import MyButton from '@/components/MyButton.vue';
import useStudyDataStore from '@/stores/studydata_store';
import LikertScale from '@/components/LikertScale.vue'
import { computed, ref, type Ref } from 'vue';
import type { Questionnaire } from '@/interface';
import { useRoute } from 'vue-router';

const currentTask = computed(() => useRoute().params.task.toString()).value;
const currentTaskTitle = currentTask.charAt(0).toUpperCase() + currentTask.slice(1).replace(/[^0-9](?=[0-9])/g, `$& `);

const deceptiveStrategies = ref("");
const deceptiveStrategiesOptions = ["Yes", "No", "Maybe"];

const dpCharacteristicsQuestions = ref([
    { category: "asymmetric", text: "I found certain design choices to present available options unequally.", rating: -1 },
    { category: "covert", text: "I found the effects of certain design choices hidden from me.", rating: -1 },
    { category: "deceptive", text: "I found some design choices to induce false belielfs by confusing, misleading, or keeping information from me.", rating: -1 },
    { category: "hidesInformation", text: "I found certain design choices to obscure or delay necessary information.", rating: -1 },
    { category: "restrictive", text: "I found certain design choices to restrict available options.", rating: -1 },
    { category: "disparateTreatment", text: "I found certain design choices to create (dis)advantages for user groups or treating them differently.", rating: -1 }
]);

const nasaTlxQuestions = ref([
    { category: "mentalDemand", text: "How mentally demanding was the task?", rating: -1 },
    { category: "physicalDemand", text: "How physically demanding was the task?", rating: -1 },
    { category: "temporalDemand", text: "How hurried or rushed was the pace of the task?", rating: -1 },
    { category: "performance", text: "How successful were you in accomplishing what you were asked to do?", rating: -1 },
    { category: "effort", text: "How hard did you have to work to accomplish your level of performance?", rating: -1 },
    { category: "frustration", text: "How insecure, discouraged, irritated, stressed and annoyed were you?", rating: -1 }
]);

function questionsToQuestionnaire(questions: { category: string, text: string, rating: number }[]): Questionnaire {
    const result: Questionnaire = {};

    questions.forEach((question) => {
        result[question.category] = question.rating;
    });

    return result;
}

const onNext = () => {
    const dpCharacteristics: Questionnaire = questionsToQuestionnaire(dpCharacteristicsQuestions.value);
    const nasaTlx: Questionnaire = questionsToQuestionnaire(nasaTlxQuestions.value);
    useStudyDataStore().updateDeceptiveStrategies(deceptiveStrategies.value);
    useStudyDataStore().updateDpCharacteristics(dpCharacteristics);
    useStudyDataStore().updateNasaTlx(nasaTlx);
    useStudyDataStore().goToNextTask();
}

const questionnaireComplete = (): boolean => {
    return deceptiveStrategies.value.trim() != "" &&
        dpCharacteristicsQuestions.value.every(({ rating }) => rating > -1) &&
        nasaTlxQuestions.value.every(({ rating }) => rating > -1)
}
</script>

<style scoped>
.questionnaire-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.title {
    width: 100%;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.description-box {
    box-sizing: border-box;
    border-radius: 1rem;
    border: 0.15rem solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 3rem;
}

.radio-button-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.radio-button-list {
    padding-left: 3rem;
    list-style: none;
    display: flex;
    flex-direction: row;
}

.radio-button-list:last-of-type {
    border-bottom: 0;
}

.radio-button-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    width: fit-content;
    margin-right: 3rem;
}

.radio-button {
    margin-right: 0.5rem;
    border-width: 0.15rem;
    width: 1rem;
    height: 1rem;
}

.likert-questions-title {
    margin: 0;
    text-align: left;
}

.description {
    margin: 0;
    text-align: left;
}

.deceptive-strategies-row {
    display: flex;
    flex-direction: column;
    /*border-bottom: solid 0.15rem #dadada;*/
    margin-top: 3rem;
    margin-bottom: 4rem;
}

.deceptive-strategies-question {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>