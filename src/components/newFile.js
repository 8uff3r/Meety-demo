import { ref } from "vue";
import { useQuasar } from "quasar";

//Props
export default await (async () => {
const __VLS_setup = async () => {
const props = defineProps(["msg", "dark"]);
const prompt = ref(props.msg);
const dark = ref(false);
const auth = ref([
{ model: "", label: "Username" },
{ model: "", label: "Password" },
]);
// Login Spinner
const $q = useQuasar();
function loggingIn() {
const dialog = $q.dialog({
message: "Logging in...",
progress: true,
persistent: true,
ok: false
});

// we simulate some progress here...
let percentage = 0;
const interval = setInterval(() => {
percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

// we update the dialog
dialog.update({
message: `Logging in... ${percentage}%`
});

// if we are done, we're gonna close it
if (percentage === 100) {
clearInterval(interval);
setTimeout(() => {
dialog.hide();
}, 350);
}
}, 500);
}

const submitting = ref(false);

function simulateSubmit() {
submitting.value = true;
// Simulating a delay here.
// When we are done, we reset "submitting"
// Boolean to false to restore the
// initial state.
setTimeout(() => {
// delay simulated, we are done,
// now restoring submit to its initial state
submitting.value = false;
}, 3000);
}
//Helper Functions
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
return {
$props: (await import('./__VLS_types.js')).makeOptional(defineProps(["msg", "dark"]))
};
}
});
const __VLS_template = () => ({});
return {} as typeof __VLS_Component & (new () => { $slots: ReturnType<typeof __VLS_template>; });
};
return await __VLS_setup();
})();
