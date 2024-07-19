<script lang="ts">
	export let showModal: boolean;
	export let photoURI: string;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
{#if photoURI}
	<dialog
		bind:this={dialog}
		on:close={() => {
			showModal = false;
			photoURI = "";
		}}
		on:click|self={() => dialog.close()}
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click|stopPropagation>
			<img src={photoURI} alt="" width="400px">
			<!-- svelte-ignore a11y-autofocus -->
			<button type="button" class="pure-button" autofocus
			style="font-size: 70%;"
			on:click={() => dialog.close()}>Close &times;</button>
		</div>
	</dialog>
{/if}

<style>
	@media only screen and (max-width: 500px) {
		img {
			width: 325px;
		}
	}

	dialog {
		max-width: 64em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		background-color: var(--colour2);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
