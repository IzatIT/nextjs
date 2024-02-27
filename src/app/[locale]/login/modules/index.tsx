"use client"
import { useLoginMutation } from "@/store/api-slices"
import { Button, Center, Flex, PasswordInput, TextInput } from "@mantine/core"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useForm, yupResolver } from '@mantine/form';
import { notify } from "@/utils"
import { UseActions } from "@/hooks/use-actions"
import { getLoginForm } from "@/lib"

export const LoginModule = () => {
    const t = useTranslations()
    const router = useRouter()
    const locale = useLocale()
    const { logIn } = UseActions();
    const [login] = useLoginMutation();

    const form = useForm<IAuthRequest>(getLoginForm({
        minSix: t("form.errors.minSix"),
        required: t("form.error.required")
    }));

    const handleSubmit = async (values: IAuthRequest) => {
        try {
            const profileData = await login(values).unwrap();
            notify(true, t("notification.wellcome"))
            logIn({ ...profileData });
            router.replace(`/${locale}/admin/news`);
        } catch (e) {
            notify(false, t("notification.error"))
        }
    };
    return (
        <Flex gap={30} miw={300} direction="column">
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <TextInput
                    maxLength={14}
                    minLength={14}
                    {...form.getInputProps('login')}
                    error={form.errors.login}
                    label={t("form.label.login")} />
                <PasswordInput
                    {...form.getInputProps('password')}
                    error={form.errors.password}
                    label={t("form.label.password")} />
                <Center>
                    <Button onClick={() => router.back()}>
                        {t("button.cancel")}
                    </Button>
                    <Button type="submit">
                        {t("button.login")}
                    </Button>
                </Center>
            </form>
        </Flex>
    )
}
