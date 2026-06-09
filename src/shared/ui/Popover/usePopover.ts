import { reactive, readonly } from 'vue';

type PopoverCallbacks = {
  onConfirm?: () => void;
  onCancel?: () => void;
};

type PopoverState = {
  visible: boolean;
  target?: HTMLElement;
  message: string;
  acceptName?: string;
  cancelName?: string;
  maxWidth?: number;
} & PopoverCallbacks;

const state = reactive<PopoverState>({
  visible: false,
  target: undefined,
  message: '',
  acceptName: 'Ok',
  cancelName: 'Отменить',
  maxWidth: 300,
  onConfirm: undefined,
  onCancel: undefined,
});

type PopoverOptions = Prettify<Omit<PopoverState, 'visible' | 'target'> & { target: HTMLElement}>

export function usePopover() {
  const open = ({
    acceptName,
    cancelName,
    maxWidth,
    ...options
  }: PopoverOptions): void => {
    state.visible = true;
    state.target = options.target;
    state.message = options.message ?? '';
    state.acceptName = acceptName || state.acceptName;
    state.cancelName = cancelName || state.cancelName;
    state.maxWidth = maxWidth || state.maxWidth;
    state.onConfirm = options.onConfirm;
    state.onCancel = options.onCancel;
  };

  function close() {
    state.visible = false;
    state.target = undefined;
    state.onConfirm = undefined;
    state.onCancel = undefined;
  }

  function confirm() {
    state.onConfirm?.();
    close();
  }

  function cancel() {
    state.onCancel?.();
    close();
  }

  return {
    state: readonly(state),
    open,
    close,
    confirm,
    cancel,
  };
}
