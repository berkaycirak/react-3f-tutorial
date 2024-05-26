import { create } from 'zustand';

interface CharacterAnimationProps {
	currentAnimation: THREE.AnimationAction | null;
	updateCurrentAnimation: (payload: THREE.AnimationAction) => void;
}

export const useCharacterAnimation = create<CharacterAnimationProps>(
	(set) => ({
		currentAnimation: null,
		updateCurrentAnimation: (payload: THREE.AnimationAction) =>
			set({
				currentAnimation: payload,
			}),
	})
);
