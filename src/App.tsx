import { NumberInput } from '@mantine/core';
import { useTranslation } from "react-i18next";

export function App() {
    const { t } = useTranslation();
    return (
        <div>
            <NumberInput label={t("hello")}/>
        </div>
    );
}