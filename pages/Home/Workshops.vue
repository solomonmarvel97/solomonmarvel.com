<template>
    <section class="mb-6">


        <div class="workshop-labs">
            <div class="lab" v-for="workshop in workshopData">
                        <iframe class="mb-1" :src="workshop.source" allowfullscreen allowtransparency allow="autoplay">
                        </iframe>
                        <div class="details">
                            <p class="title mb-1">{{workshop.title}}</p>
                            <p class="description">{{workshop.description}}</p>
                        </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    data() {
    return {
        workshopData: [
            {
                source: "https://www.youtube.com/embed/Aa4dE-tkVe8",
                title: "Building Effective Product Proof of Concept and Case Studies",
                description: `Developing compelling product proof of concept and case studies is a crucial skill for software engineers to showcase their solutions effectively.`
            },
            {
                source: "https://www.youtube.com/embed/-NlPH_p3LJ0",
                title: "Bring Your Own Laptop",
                description: `Open-source brainstorming session with friends on a gift card exchange platform design`
            },
            {
                source: "https://www.youtube.com/embed/TpreFf8y0ys",
                title: "Introduction To Software Engineering",
                description: `At its core, software engineering goes beyond mere coding. It's a systematic approach to designing, developing, and maintaining software that meets high-quality standards.`
            },
        ]
    }
    }
}
</script>


<style scoped>
.workshop-labs {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
	height: 100%;
}

.workshop-labs div {
    flex-basis: 300px;
	background-color: #1e1e1e;

}

.lab {
    border-radius: var(--input-border-radius);
    width: 100%;
    position: relative;
}

.details {
		padding: 20px;
		padding-top: 0
}

.details .title {
    font-size: 16px
}

.details .description {
    font-size: 12px
}

iframe {
  border-radius: var(--input-border-radius);
  width: 100%;
  height: 200px;
  border: 1px solid #1e1e1e;
}

@media (max-width: 1000px) {
  iframe {
        height: 200px;
    }
}


</style>
