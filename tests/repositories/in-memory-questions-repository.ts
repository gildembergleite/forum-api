import { Question } from '@/domain/entities/question'
import { QuestionsRepository } from '@/domain/repositories/questions-repository'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public questions: Question[] = []

  async create(question: Question): Promise<void> {
    this.questions.push(question)
  }

  async delete(question: Question): Promise<Question | null> {
    // this.questions = this.questions.filter((item) => item.id !== question.id)

    const questionIndex = this.questions.findIndex(
      (item) => item.id === question.id,
    )

    this.questions.splice(questionIndex, 1)

    return question
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.questions.find(
      (question) => question.slug.value === slug,
    )

    if (!question) {
      return null
    }

    return question
  }

  async findById(questionId: string): Promise<Question | null> {
    const question = this.questions.find(
      (question) => question.id.toValue() === questionId,
    )

    if (!question) {
      return null
    }

    return question
  }
}
