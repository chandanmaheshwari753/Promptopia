"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePrompt = () => {
    const router = useRouter();
    const [promptId, setPromptId] = useState(null);
    // const searchParams = useSearchParams();
    // const promptId = searchParams.get("id");

    const [post, setPost] = useState({ prompt: "", tag: "" });
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");
        setPromptId(id);

        if (id) {
            getPromptDetails(id);
        }
    }, []);

    // useEffect(() => {
    //     const getPromptDetails = async () => {
    //         try {
    //             const response = await fetch(`/api/prompt/${promptId}`);
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch prompt details");
    //             }
    //             const data = await response.json();
    //             setPost({
    //                 prompt: data.prompt,
    //                 tag: data.tag,
    //             });
    //         } catch (error) {
    //             console.error("Error fetching prompt details:", error);
    //         }
    //     };

    //     if (promptId) getPromptDetails();
    // }, [promptId]);
    const getPromptDetails = async (id) => {
        try {
            const response = await fetch(`/api/prompt/${id}`);
            if (!response.ok) throw new Error("Failed to fetch prompt details");

            const data = await response.json();
            setPost({ prompt: data.prompt, tag: data.tag });
        } catch (error) {
            console.error("Error fetching prompt details:", error);
        }
    };

    const updatePrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!promptId) return alert("Missing PromptId!");

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    );
};

export default UpdatePrompt;
