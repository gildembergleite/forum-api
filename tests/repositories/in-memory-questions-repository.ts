import { Question } from '@/domain/entities/question'
import { QuestionsRepository } from '@/domain/repositories/questions-repository'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public questions: Question[] = []

  async create(question: Question): Promise<void> {
    this.questions.push(question)
  }
}
