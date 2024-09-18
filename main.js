import './style.css'
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

let keys = document.querySelectorAll('.key')
for (let key of keys) {
  let noteToPlay = key.getAttribute('data-note')
  key.addEventListener('click', () => playNote(noteToPlay))
}

function playNote(note) {
  synth.triggerAttackRelease(note);


  synth.triggerAttackRelease(note, "8n");
}

