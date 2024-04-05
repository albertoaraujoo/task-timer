import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput } from "./styles";
import { TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        list="task-suggestions"
        id="task"
        placeholder="Give your project a name"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="">during</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutes.</span>
    </FormContainer>
  );
};
