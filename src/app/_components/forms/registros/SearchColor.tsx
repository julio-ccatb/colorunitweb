import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type Dispatch, type SetStateAction, useState } from "react";
import { type Tbase } from "pg/generated/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toInteger } from "lodash";
import { FilePlus2, Loader2, Search } from "lucide-react";

const InputSchema = z.object({
  R: z.number().optional().default(0),
  G: z.number().optional().default(0),
  B: z.number().optional().default(0),
  tipo: z.number().optional().default(0),
});
export type SearchColorInput = z.infer<typeof InputSchema>;

type Props = {
  tbases: Tbase[];
  setRGB: Dispatch<
    SetStateAction<{
      R: number;
      G: number;
      B: number;
    }>
  >;
  isLoading: boolean;
  onSubmit: SubmitHandler<SearchColorInput>;
};

export default function SeachColorForm(props: Props) {
  const resolver = zodResolver(InputSchema);
  const [selected, setSelected] = useState<Tbase>();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchColorInput>({
    resolver,
    defaultValues: { R: 0, G: 0, B: 0 },
  });

  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      className={`flex flex-col items-start justify-center gap-2`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="join">
            <input
              autoComplete="off"
              type="text"
              id="R"
              onChange={(e) => {
                setValue("R", toInteger(e.target.value));
                props.setRGB((cur) => {
                  return { ...cur, R: toInteger(e.target.value) };
                });
              }}
              placeholder="R"
              className={`join-item w-28 border p-2 text-center ${
                errors.R ? "input-error" : "focus:input-accent"
              }`}
            />
            <input
              autoComplete="off"
              type="text"
              id="G"
              onChange={(e) => {
                {
                  setValue("G", toInteger(e.target.value));
                  props.setRGB((cur) => {
                    return { ...cur, G: toInteger(e.target.value) };
                  });
                }
              }}
              placeholder="G"
              className={`join-item w-28 border p-2 text-center ${
                errors.R ? "input-error" : "focus:input-accent"
              }`}
            />
            <input
              autoComplete="off"
              type="text"
              id="B"
              onChange={(e) => {
                setValue("B", toInteger(e.target.value));
                props.setRGB((cur) => {
                  return { ...cur, B: toInteger(e.target.value) };
                });
              }}
              placeholder="B"
              className={`join-item w-28  border p-2 text-center ${
                errors.B ? "input-error" : "focus:input-accent"
              }`}
            />
            <select
              id="tbaseId"
              name="tbaseId"
              value={selected?.id ?? ""}
              onChange={(e) => {
                const selectedId = Number(e.target.value);
                const selectedItem = props.tbases.find(
                  (item) => item.id === selectedId,
                );
                setValue("tipo", selectedId);
                setSelected(selectedItem);
              }}
              className={`select select-bordered w-full max-w-xs rounded-none focus:select-accent ${
                errors.tipo ? "select-error" : ""
              } `}
            >
              <option className="" value="" disabled>
                Tipo de base
              </option>
              {props.tbases?.map((item) => (
                <option
                  className="   text-graySecondary hover:bg-greenAccent "
                  key={item.id}
                  value={item.id}
                >
                  {item.shortcode} - {item.description}
                </option>
              ))}
            </select>
            <button
              disabled={props.isLoading}
              type="submit"
              className=" border-1 flex items-center justify-center gap-2 rounded-r-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
            >
              <span>{props.isLoading ? "Prcesando..." : "Search"}</span>{" "}
              {props.isLoading ? (
                <Loader2 className="animate-spin" size={15} />
              ) : (
                <Search size={15} />
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
