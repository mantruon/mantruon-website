export interface Project {
    title: string
    description: string
    stack: string[]
    slug: string
    repo?: string
    demo?: string
    paper?: string
}

export const projects: Project[] = [
    {
        title: "Probing Whisper for Vietnamese Tone Representations in Whisper and PhoWhisper",
        slug: "whisper-probing",
        description: "A probing study investigating whether OpenAI's Whisper encoder encodes phonologically meaningful representations of Vietnamese tones across its internal layers.",
        stack: ["Python", "PyTorch", "HuggingFace", "Whisper", "scikit-learn"],
        repo: "https://github.com/mantruon/ling487-final",
        paper: "/academic%20papers/whisper-probing.pdf"
    },
    {
        title: "Lewis Carroll GPT",
        slug: "lewis-carroll-gpt",
        description: "A character-level language model trained on Lewis Carroll texts for phonotactic modeling, built with HuggingFace's GPT2LMHeadModel.",
        stack: ["Python", "PyTorch", "HuggingFace"],
        repo: "https://github.com/mantruon/your-repo-name"
    },
    {
        title: "Vowel Classifier",
        slug: "vowel-classifier",
        description: "A neural network that classifies vowels using acoustic formant data (F1, F2, F3).",
        stack: ["Python", "TensorFlow", "Keras"],
        repo: "https://github.com/mantruon/your-repo-name"
    }
]