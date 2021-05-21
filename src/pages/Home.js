import { useState } from "react";

import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Section from "../components/Section";
import BookCard from "../components/BookCard";
import BookItem from "../components/BookItem";
import Slider from "../components/Slider";

export default function Home() {
  const [rating, setRating] = useState(2);

  return (
    <div>
      <Header
        left={<Avatar src="https://i.pravatar.cc/300">Hi, Dustin!</Avatar>}
        right={
          <Button variant="transparent">
            <i className="bi bi-search"></i>
          </Button>
        }
      ></Header>
      <Section title="Section title">
        <Slider>
          <BookCard
            index={0}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookCard>
          <BookCard
            index={1}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookCard>
          <BookCard
            index={2}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookCard>
          <BookCard
            index={3}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookCard>
          <BookCard
            index={4}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookCard>
        </Slider>
      </Section>
      <Section title="Newest">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-xl)",
          }}
        >
          <BookItem
            index={0}
            rating={rating}
            onChangeRating={setRating}
            onBookmark={() => null}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookItem>
          <BookItem
            index={1}
            rating={1}
            onBookmark={() => null}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookItem>
          <BookItem
            index={2}
            rating={1}
            onBookmark={() => null}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookItem>
          <BookItem
            index={3}
            rating={1}
            onBookmark={() => null}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookItem>
          <BookItem
            index={4}
            rating={1}
            onBookmark={() => null}
            title="Example title"
            author="Author Name"
            src="https://picsum.photos/400/200"
          ></BookItem>
        </div>
      </Section>
    </div>
  );
}
