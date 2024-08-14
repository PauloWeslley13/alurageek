import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function usePanelAdm() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/panel-adm/products");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeMenu(_event: SyntheticEvent, newValue: number) {
    setValue(newValue);

    if (Number(newValue) === 0) {
      navigate("/panel-adm/products");
    }

    if (Number(newValue) === 1) {
      navigate("/panel-adm/categories");
    }
  }

  const a11yTabProps = (value: string) => ({
    id: `vertical-tab-${value}`,
    "aria-controls": `vertical-tab-panel-${value}`,
  });

  return { value, handleChangeMenu, a11yTabProps };
}
