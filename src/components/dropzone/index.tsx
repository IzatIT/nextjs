"use client"
import { useState } from 'react';
import { Box, Button, Flex, Grid, Group, Image, Modal, Text, UnstyledButton, rem } from '@mantine/core';
import { IconPhoto, IconTrash } from '@tabler/icons-react';
import {
    Dropzone,
    DropzoneProps,
    FileRejection,
    FileWithPath,
    IMAGE_MIME_TYPE,
    PDF_MIME_TYPE
} from '@mantine/dropzone';
import { notify } from '@/utils';
import { useTranslations } from 'next-intl';
import { useDisclosure } from '@mantine/hooks';

interface Props {
    height?: string | number;
    width?: string | number;
    props?: DropzoneProps;
    onDrop?: (file: FileWithPath[]) => void
    onReject?: (file: FileRejection[]) => void
    type: "image" | "file";
}

type acceptedFiles = (FileWithPath & { preview: string; })[]

export const AppDropzone = ({
    height,
    width,
    type,
    props,
    onDrop,
    onReject
}: Props) => {
    const t = useTranslations()
    const isImage = type === "image"
    const [acceptedFiles, setAcceptedFiles] = useState<acceptedFiles | null>(null)
    const [active, setActive] = useState(0)
    const [opened, { open, close }] = useDisclosure(false);


    const handleOnDrop = (files: FileWithPath[]) => {
        if (onDrop) {
            onDrop(files)
        }
        const withPreview = files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }))
        setAcceptedFiles(withPreview)
        notify(true,
            isImage ?
                t("notify.accepted") :
                t("notify.accepted"),
            `${files.map((file, idx) => `${idx + 1}: ${file.name}`)}`)
    }

    const handleOnReject = (files: FileRejection[]) => {
        if (onReject) {
            onReject(files)
        }
        notify(false, isImage ?
            t("notify.image-rejected") :
            t("notify.file-rejected"),
            `${files.map((file, idx) => `${idx + 1}: ${file.file.name}`)}`)
    }
    console.log(acceptedFiles)

    return (
        <Box mih={100} h={height} miw={300} w={width}>
            <Dropzone
                onDrop={handleOnDrop}
                onReject={handleOnReject}
                miw={300}
                maw={800}
                mb={20}
                w="80%"
                h="100%"
                accept={isImage ? IMAGE_MIME_TYPE : PDF_MIME_TYPE}
                {...props}
            >
                <Group h="100%" justify="center" gap="xs" style={{ pointerEvents: 'none' }}>
                    <IconPhoto
                        style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                        stroke={1.5}
                    />
                    <Flex mih={100} miw={100} w={width} h={height} direction="column" align="center" justify="center">
                        <Text size="xl" inline>
                            {isImage ? t("actions.attach-image") : t("actions.attach-file")}
                        </Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                            {isImage ? t("descriptions.images") : t("descriptions.files")}
                        </Text>
                    </Flex>
                </Group>
            </Dropzone>
            <Grid>
                {
                    isImage &&
                    acceptedFiles?.map((file, idx) => (
                        <Grid.Col pos="relative" span={3} key={idx}>
                            <Image
                                onClick={() => {
                                    setActive(idx)
                                    open()
                                }}
                                w="100%" key={file.preview} src={file.preview} alt='' />
                            <UnstyledButton
                                pos="absolute"
                                top={10}
                                left={10}
                                p={0} m={0}>
                                <IconTrash color='orange' />
                            </UnstyledButton>
                        </Grid.Col>
                    ))
                }
            </Grid>
            <Modal onClose={close} withCloseButton opened={opened} >
                <Image w="100%" src={acceptedFiles && acceptedFiles[active].preview} alt='' />
            </Modal>
        </Box >
    );
}