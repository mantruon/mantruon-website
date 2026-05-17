export interface Project {
    title: string
    description: string
    stack: string[]
    repo?: string
    demo?: string
}

export const projects: Project[] = [
    {
        title: "Probing Whisper for Vietnamese Tone Representations",
        description: "A probing study investigating whether OpenAI's Whisper encoder encodes phonologically meaningful representations of Vietnamese tones across its internal layers. Used linear probing classifiers trained on intermediate encoder activations to decode tone identity.",
        stack: ["Python", "PyTorch", "HuggingFace", "Whisper", "scikit-learn"],
        repo: "https://github.com/mantruon/ling487-final"
    },
    {
        title: "Lewis Carroll GPT",
        description: "A character-level language model trained on Lewis Carroll texts for phonotactic modeling, built with HuggingFace's GPT2LMHeadModel.",
        stack: ["Python", "PyTorch", "HuggingFace", "TypeScript"],
        repo: "https://github.com/mantruon/gpt-text-prediction-model"
    }
]