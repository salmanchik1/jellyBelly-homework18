import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
    user_name: string;
    user_email: string;
    category: string;
};

const Review = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>();
    console.log(errors);

    const onSubmit: SubmitHandler<FormType> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                User{" "}
                <input
                    type="text"
                    {...register("user_name", {
                        required: { value: true, message: "Required" },
                        minLength: { value: 3, message: "Minimum length is 3" },
                    })}
                />
            </label>
            {errors.user_name && <p className={"error"}>{errors.user_name.message}</p>}
            <label>
                Email{" "}
                <input
                    type="email"
                    {...register("user_email", {
                        required: { value: true, message: "Required" },
                    })}
                />
            </label>
            {errors.user_email && <p className={"error"}>{errors.user_email.message}</p>}
            <select {...register("category")}>
                <option value="a">Select A</option>
                <option value="b">Select B</option>
                <option value="c">Select C</option>
            </select>
            <input type="submit" />
        </form>
    );
};
export default Review;
