import { useMutation } from "@apollo/client";
import ReviewCreateForm from "./ReviewCreateForm";
import { createReview } from "../../../graphql/mutations";
import { useEffect } from "react";
import { Alert } from "react-native";
import { useNavigate } from "react-router-native";

const ReviewCreate = () => {
  const { navigate } = useNavigate();
  const [mutate, { error, loading, data }] = useMutation(createReview);

  const handleSubmit = async (review) => {
    const { data } = await mutate({ variables: { review } });
    navigate(`/repositories/${data.createReview.repositoryId}`);
  }

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error.message);
    }
  }, [error]);

    return (
        <ReviewCreateForm onSubmit={handleSubmit} />
    )
}

export default ReviewCreate;