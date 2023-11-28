export const modalOpen = (
  setIsActive: (value: React.SetStateAction<boolean>) => void
) => {
  setIsActive(true);
  document.body?.classList.add('hidden');
};

export const modalClose = (
  setIsActive: (value: React.SetStateAction<boolean>) => void
) => {
  setIsActive(false);
  document.body?.classList.remove('hidden');
};
