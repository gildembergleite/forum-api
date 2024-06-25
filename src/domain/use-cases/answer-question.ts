import { UniqueEntityId } from "../core/entities/unique-entity-id";
import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answer-repository";

export interface AnswerQuestionUseCaseExecuteProps {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  private answerRepository: AnswerRepository;

  constructor({ answerRepository }: { answerRepository: AnswerRepository }) {
    this.answerRepository = answerRepository;
  }

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseExecuteProps) {
    const answer = Answer.create({
      instructorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
    });

    await this.answerRepository.create(answer);

    return answer;
  }
}
