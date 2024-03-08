<template>
    <NuxtLayout name="404">
        <div
            class="error"
            @mousemove="handleMouseMove"
            @mouseleave="resetImagePosition"
        >
            <div>
                <div class="center">
                    <img
                        class="error-image"
                        :src="errorImage"
                        :style="imageStyles"
                        alt="404 Error"
                    />
                    <h1 class="mb-1">
                        <span class="gradient-text">Oooops!!</span>
                    </h1>
                    <p class="mb-1">Error: {{ errorMessage }}</p>
                    <p>Hold my hand 🙃, let me take you home</p>
                    <button class="mt-4 btn-gradient" @click="goBack">
                        Let's Go Home
                    </button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
    data() {
        return {
            xPos: 0,
            yPos: 0,
            errorImage: "/icons/404.webp", // Update this path if necessary
        };
    },
    props: {
        error: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        errorMessage() {
            return this.error.message || "An unexpected error occurred.";
        },
        imageStyles() {
            const flowIntensity = 20;
            const moveX = this.xPos / flowIntensity - flowIntensity / 2;
            const moveY = this.yPos / flowIntensity - flowIntensity / 2;
            return {
                transform: `translate(${moveX}px, ${moveY}px)`,
            };
        },
    },
    methods: {
        handleMouseMove(event) {
            const rect = event.target.getBoundingClientRect();
            this.xPos = event.clientX - rect.left - rect.width / 2;
            this.yPos = event.clientY - rect.top - rect.height / 2;
        },
        resetImagePosition() {
            this.xPos = 0;
            this.yPos = 0;
        },
        goBack() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.error {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}

.error img {
    height: 300px;
    object-fit: cover;
}

span {
    color: var(--primary-light);
}

.error .error-image {
    transition: transform 0.1s ease-out;
    position: relative;

    transform: translate(-50%, -50%);
}
</style>
